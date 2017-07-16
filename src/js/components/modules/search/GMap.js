import React, {Component} from 'react';

let map;

export default class GMap extends Component {
    constructor(props) {
        super(props);

    }


    componentWillReceiveProps(newProps) {
        this.plotMap(newProps);
    }

    plotMap(props) {
        try {
            let zoomLevel = 14;
            map = new window.google.maps.Map(document.getElementById('g-map'), {
                zoom: zoomLevel,
                center: new google.maps.LatLng(props.center[1], props.center[0])
            });

            let latlngbounds = new google.maps.LatLngBounds();

            let cuisineAreas = [];

            if (this.props.cuisineWiseReults && this.props.cuisineWiseReults.areas) {
                cuisineAreas = this.props.cuisineWiseReults.areas.sort(function (a, b) {
                    const x = a.score;
                    const y = b.score;

                    if (x === 0 && y === 0)
                        return 1 / y - 1 / x  || 0;
                    else return y - x;
                })
            }

            props.areasToPlot.forEach((area, i) => {

                let currentAreaDetails = {};

                if (cuisineAreas && cuisineAreas.length) {
                    currentAreaDetails = cuisineAreas.find(a => {
                        return a.id == area.id
                    })
                };

                const areaCoordinates = area.polygon.coordinates[0].map(coridnates => {
                    latlngbounds.extend(new google.maps.LatLng(coridnates[1], coridnates[0]));
                    return (new google.maps.LatLng(coridnates[1], coridnates[0]))
                })

                let color = '#23d160';
                let opacity = 0.7;

                if (cuisineAreas && cuisineAreas[0] && area.id != cuisineAreas[0].id) {
                    color = '#FF0000';
                    opacity = 0.35;
                }
                // Construct the polygon.
               const areaPolygon = new google.maps.Polygon({
                 paths: areaCoordinates,
                 strokeColor: color,
                 strokeOpacity: 0.8,
                 strokeWeight: 3,
                 fillColor: color,
                 fillOpacity: opacity
               });

               areaPolygon.setMap(map);

               const paths = areaPolygon.getPaths();

               const polygonBounds = new google.maps.LatLngBounds();

               paths.forEach(function(path){
                 const ar = path.getArray();

                 for(let i=0, l = ar.length; i < l; i++){
                    latlngbounds.extend(ar[i]);
                  }
              })
                if (cuisineAreas.length) {
                    var contentString = `<div class="map-score"><div>Score: ${currentAreaDetails.score}</div>
                                          <div class="map-rating">Average Restaurant Rating: ${currentAreaDetails.averageRestaurantRating}</div></div>`;

                    var infowindow = new google.maps.InfoWindow({
                      content: contentString
                    });


                    areaPolygon.addListener('mouseover', function() {
                        infowindow.setPosition(new google.maps.LatLng(area.center[1],  area.center[0]));
                        infowindow.open(map, areaPolygon);
                      });

                areaPolygon.addListener('mouseout', function() {
                    infowindow.close();
                });
                }
            })

            map.fitBounds(latlngbounds)
        } catch (e) {
            console.log('map error');
        }
    }

    componentDidMount() {
        this.plotMap();
    }


    renderLoaderText() {
        if (this.props.resultApiStatus.inProgress) {
            return (
                <div className="map__text">
                    <div className="text">Fetching and Analyzing.....</div>
                </div>
            )
        }

        return null;
    }

    render () {
        return(
            <div className="map__wrapper">
                <div className="map" id="g-map">
                </div>
                {this.renderLoaderText()}
            </div>

        );
    }

}
