import React, {Component} from 'react';
import {SearchBar, SearchResults} from '../modules/search';
import {SearchActions} from '../../actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class Search extends Component {
    constructor(props) {
        super(props);

        this.selectArea = this.selectArea.bind(this);
        this.selectCuisine = this.selectCuisine.bind(this);
    }

    componentDidMount() {
        this.props.actions.fetchCities();
        this.props.actions.fetchCuisineList();
    }

    changeCity(e) {
        const cityId = parseInt(e.target.value, 10);

        this.props.actions.fetchAreaList(cityId);
    }

    selectArea(e) {
        const areaId = parseInt(e.target.value, 10);
        this.props.actions.selectArea(areaId);
    }

    selectCuisine(e) {
        const cuisineId = parseInt(e.target.value, 10);

        this.props.actions.selectCuisine(cuisineId);
    }

    fetchResults() {
        this.props.actions.fetchResults(
            this.props.selectedCityId,
            this.props.selectedAreaId,
            this.props.selectedCuisineId
        );
    }

    render() {
        return (
            <div className="container">
                <div className="columns">
                    <div className="column">
                        <SearchBar
                            searchParam={this.props.searchParam}
                            searchApiStatus={this.props.searchApiStatus}
                            cityApiStatus={this.props.cityApiStatus}
                            cityList={this.props.cityList}
                            cuisineList={this.props.cuisineList}
                            cuisineListApiStatus={this.props.cuisineListApiStatus}
                            selectedCityId={this.props.selectedCityId}
                            selectedAreaId={this.props.selectedAreaId}
                            selectedCuisineId={this.props.selectedCuisineId}
                            areaListApiStatus={this.props.areaListApiStatus}
                            areaList={this.props.areaList}
                            changeCity={this.changeCity}
                            selectArea={this.selectArea}
                            selectCuisine={this.selectCuisine}
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
            cityApiStatus: state.search.cityApiStatus,
            cuisineList: state.search.cuisineList,
            cuisineListApiStatus: state.search.cuisineListApiStatus,
            selectedCityId: state.search.selectedCityId,
            areaList: state.search.areaList,
            areaListApiStatus: state.search.areaListApiStatus,
            selectedAreaId: state.search.selectedAreaId,
            selectedCuisineId: state.search.selectedCuisineId
        };
    },
    (dispatch => ({
        actions: bindActionCreators(SearchActions, dispatch)
    }))
)(Search);
