import ActionConstants from '../ActionConstants';
import {SearchApi} from '../apis';

function _fetchCityApiStatus(inProgress, errors = null) {
    return {
        type: ActionConstants.UPDATE_CITY_API_STATUS,
        inProgress,
        errors
    };
}


function _updateCityList(cityList) {
    return {
        type: ActionConstants.UPDATE_CITY_LIST,
        cityList
    };
}


export function fetchCities() {
    return (dispatch) => {
        dispatch(_fetchCityApiStatus(true));

        return SearchApi.fetchCities()
            .then(res => {
                dispatch(_fetchCityApiStatus(false));
                dispatch(_updateCityList(res));
                dispatch(fetchAreaList(res[0].id));
            })
            .catch(err => {
                dispatch(_fetchCityApiStatus(false, [err]));
            });
    };
}


function _fetchCuisinesApiStatus(inProgress, errors = null) {
    return {
        type: ActionConstants.UPDATE_CUISINE_API_STATUS,
        inProgress,
        errors
    };
}


function  _updateCuisineList(cuisineList) {
    return {
        type: ActionConstants.UPDATE_CUISINE_LIST,
        cuisineList
    }
}


export function fetchCuisineList() {
    return (dispatch) => {
        dispatch(_fetchCuisinesApiStatus(true));

        return SearchApi.fetchCuisineList()
            .then(res => {
                dispatch(_fetchCuisinesApiStatus(false));
                dispatch(_updateCuisineList(res));
            })
            .catch(err => {
                dispatch(_fetchCuisinesApiStatus(false, [err]));
            });
    };
}

function _fetchAreaIdsApiStatus(inProgress, errors = null) {
    return {
        type: ActionConstants.UPDATE_AREA_LIST_API_STATUS,
        inProgress,
        errors
    };
}


function  _updateAearList(areaList) {
    return {
        type: ActionConstants.UPDATE_AREA_LIST,
        areaList
    }
}


export function fetchAreaList(cityId = null) {
    return (dispatch) => {
        dispatch(_fetchAreaIdsApiStatus(true));

        return SearchApi.fetchAreas(cityId)
            .then(res => {
                dispatch(_fetchAreaIdsApiStatus(false));
                dispatch(_updateAearList(res));
            })
            .catch(err => {
                dispatch(_fetchAreaIdsApiStatus(false, [err]));
            });
    };
}


function _updateAreaId(selectedAreaId) {
    return {
        type: ActionConstants.UPDATE_SELECTED_AREA,
        selectedAreaId
    };
}


export function selectArea(selectedAreaId) {
    return (dispatch) => {
        dispatch(_updateCuisineId(0));
        dispatch(_updateAreaId(selectedAreaId));
    };
}


function _updateCuisineId(selectedCuisineId) {
    return {
        type: ActionConstants.UPDATE_SELECTED_CUISINE,
        selectedCuisineId
    };
}

export function selectCuisine(selectedCuisineId) {
    return (dispatch) => {
        dispatch(_updateAreaId(0));
        dispatch(_updateCuisineId(selectedCuisineId));
    }
}


function _updateFetchResultsApi(inProgress, resultType, errors = null) {
    return {
        type: ActionConstants.UPDATE_RESULT_API_STATUS,
        inProgress,
        resultType,
        errors
    }
}


function _updateAreaDetails(areaDetails) {
    return {
        type: ActionConstants.UPDATE_AREA_DETAILS,
        areaDetails
    }
}


function _updateAreaWiseResults(areaWiseDetails) {
    return {
        type: ActionConstants.UPDATE_AREA_WISE_DETAILS,
        areaWiseDetails
    }
}


function _updateCuisineWiseResults(cuisineWiseReults) {
    return {
        type: ActionConstants.UPDATE_CUISINE_WISE_DETAILS,
        cuisineWiseReults
    }
}


/**
 * Fetch the results
 * @param  {[type]} cityId    [description]
 * @param  {[type]} areaId    [description]
 * @param  {[type]} cuisineId [description]
 * @return {[type]}           [description]
 */
export function fetchResults(cityId, areaId, cuisineId) {
    return (dispatch) => {

        if (areaId) {
            dispatch(_updateFetchResultsApi(true, 1));

            const promiseArray = [];

            promiseArray.push(SearchApi.fetchAreaDetails(areaId));
            promiseArray.push(SearchApi.fetchAreaWiseResults(cityId, areaId));

            return Promise.all(promiseArray)
                .then(res => {
                    dispatch(_updateAreaWiseResults(res[1]));

                    const areaDetails = {};
                    areaDetails[areaId] = res[0];
                    dispatch(_updateAreaDetails(areaDetails));
                    dispatch(_updateFetchResultsApi(false, 1));
                });
        }

        if (cuisineId) {
            dispatch(_updateFetchResultsApi(true, 2));

            const promiseArray = [];

            return SearchApi.fetchCuisineWiseDetails(cityId, cuisineId)
                .then(res => {
                    const areaIds = res.areas;

                    const areaDetailsPromises = [];

                    areaIds.forEach(area => {
                        areaDetailsPromises.push(SearchApi.fetchAreaDetails(area.id));
                    });

                    const areaDetailsJSON = {}

                    Promise.all(areaDetailsPromises)
                        .then(areaDetail => {
                            areaDetail.forEach(a => {
                                areaDetailsJSON[a.id] = a;
                            })

                            dispatch(_updateAreaDetails(areaDetailsJSON));
                            dispatch(_updateCuisineWiseResults(res));
                            dispatch(_updateFetchResultsApi(false, 2));
                        });
                });
        }
    }
}
