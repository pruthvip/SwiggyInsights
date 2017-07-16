import React, {Component} from 'react';
import GMap from './GMap';
import CusineList from './cusineList';
import Graphs from './Graphs';

export default class SearchResults extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let cusineList = null;

        if (this.props.resultApiStatus.resultType === 1) {
            cusineList = (
                <CusineList
                    resultApiStatus={this.props.resultApiStatus}
                    areaWiseDetails={this.props.areaWiseDetails}
                />
            )
        }

        let currentAreaToPlot = [];
        try {
            Object.keys(this.props.areaDetails).forEach(key => {
                currentAreaToPlot.push(this.props.areaDetails[key]);
            })
        } catch (e) {
            console.log('Error');
            currentAreaToPlot = [];
        }

        return (
            <div className="box search-results">
                <GMap
                    areasToPlot={currentAreaToPlot}
                    resultApiStatus={this.props.resultApiStatus}
                    center={currentAreaToPlot[0] && currentAreaToPlot[0].center}
                    cuisineWiseReults={this.props.cuisineWiseReults}
                />
                {cusineList}
            </div>
        );
    }
}
