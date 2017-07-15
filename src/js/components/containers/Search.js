import React, {Component} from 'react';
import {SearchBar, SearchResults} from '../modules/search';
import {SearchActions} from '../../actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class Search extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log('cdm parent');
        this.props.actions.fetchCities();
    }

    fetchArea(cityId) {
        this.props.actions.fetchArea(cityId)
    }

    render() {
        console.log('actions', this.props);
        return (
            <div className="container">
                <div className="columns">
                    <div className="column">
                        <SearchBar
                            searchParam={this.props.searchParam}
                            searchApiStatus={this.props.searchApiStatus}
                            cityApiStatus={this.props.cityApiStatus}
                            cityList={this.props.cityList}
                        />
                    </div>
                    <div className="column is-two-thirds">
                        <SearchResults />
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    (state, props) => {
        return {
            searchParam: state.search.searchParam,
            searchApiStatus: state.search.searchParam,
            cityList: state.search.cityList,
            cityApiStatus: state.search.cityApiStatus
        };
    },
    (dispatch => ({
        actions: bindActionCreators(SearchActions, dispatch)
    }))
)(Search);
