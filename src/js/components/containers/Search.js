import React, {Component} from 'react';
import {SearchBar, SearchResults} from '../modules/search';
import {SearchActions} from '../../actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Graphs from '../modules/search/Graphs';


class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showExtraInsights: false
        }

        this.selectArea = this.selectArea.bind(this);
        this.selectCuisine = this.selectCuisine.bind(this);
        this.fetchResults = this.fetchResults.bind(this);
    }

    showInsights() {
        this.setState({
            showExtraInsights: true
        })
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


    renderExtraInsights() {
        return (
            <div>
                <Graphs
                    resultApiStatus={this.props.resultApiStatus}
                    areaWiseDetails={this.props.areaWiseDetails}
                />
            </div>
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
                            resultApiStatus={this.props.resultApiStatus}
                            fetchResults={this.fetchResults}
                        />
                    </div>
                    <div className="column is-two-thirds">
                        <SearchResults
                            resultApiStatus={this.props.resultApiStatus}
                            areaWiseDetails={this.props.areaWiseDetails}
                            areaDetails={this.props.areaDetails}
                            selectedCityId={this.props.selectedCityId}
                            selectedAreaId={this.props.selectedAreaId}
                            cuisineWiseReults={this.props.cuisineWiseReults}
                        />
                    </div>
                </div>

                {this.renderExtraInsights()}
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
            selectedCuisineId: state.search.selectedCuisineId,
            resultApiStatus: state.search.resultApiStatus,
            areaWiseDetails: state.search.areaWiseDetails,
            cuisineWiseReults: state.search.cuisineWiseReults,
            areaDetails: state.search.areaDetails
        };
    },
    (dispatch => ({
        actions: bindActionCreators(SearchActions, dispatch)
    }))
)(Search);
