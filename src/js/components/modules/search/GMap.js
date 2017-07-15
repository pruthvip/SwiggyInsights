import React, {Component} from 'react';

let map;

export default class GMap extends Component {
    constructor(props) {
        super(props);

        this.markers = [];

        this.addMarkers = this.addMarkers.bind(this);
    }


    addMarkers (markerArray) {
        /**
         * Plot all the points
         */
        markerArray.forEach((point) => {
            this.markers.push((new window.google.maps.Marker({
                position: point,
                map: map,
            })))
        });
    }

    componentWillReceiveProps(newProps) {
        // if (this.props.deliveryBoyLocation !== newProps.deliveryBoyLocation) {
        //
        //     const deliveryBoyMarker = this.markers[1];
        //
        //     // animate the delivery marker
        //     deliveryBoyMarker.moveTo(new google.maps.LatLng(newProps.deliveryBoyLocation));
        // }
    }

    componentDidMount() {
    //     map = new window.google.maps.Map(document.getElementById('g-map'), {
    //         zoom: 14,
    //         center: new google.maps.LatLng(data.center[1], data.center[0])
    //     });
       //
       //
    //     const areaCoordinates = data.polygon.coordinates[0].map(coridnates => {
    //         return (new google.maps.LatLng(coridnates[1], coridnates[0]))
    //     })
       //
       //
    //     // Construct the polygon.
    //    const areaPolygon = new google.maps.Polygon({
    //      paths: areaCoordinates,
    //      strokeColor: '#FF0000',
    //      strokeOpacity: 0.8,
    //      strokeWeight: 3,
    //      fillColor: '#FF0000',
    //      fillOpacity: 0.35
    //    });
       //
    //    areaPolygon.setMap(map);
    }

    render () {
        return(
            <div className="map" id="g-map">
            </div>
        );
    }

}
