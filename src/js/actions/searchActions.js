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
                dispatch(_updateCityList(res.data));
                dispatch(fetchAreaList(res.data[0].id));
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
                dispatch(_updateCuisineList(res.data));
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
                dispatch(_updateAearList(res.data));
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



/**
 * Fetch the results
 * @param  {[type]} cityId    [description]
 * @param  {[type]} areaId    [description]
 * @param  {[type]} cuisineId [description]
 * @return {[type]}           [description]
 */
export function fetchResults(cityId, areaId, cuisineId) {
    if (areaId) {

    }

    if (cuisineId) {

    }
}
