import React, {Component} from 'react';
import GMap from './GMap';
import CusineList from './cusineList';

export default class SearchResults extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="box search-results">
                <GMap />
                <CusineList />
            </div>
        );
    }
}
