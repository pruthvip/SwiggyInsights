import ActionConstants from '../ActionConstants';
import {SearchApi} from '../apis';

function _fetchCityApiStatus(inProgress, errors = null) {
    return {
        type: ActionConstants.UPDATE_CITY_API_STATUS,
        inProgress,
        errors
    };
}


function _fetchCityList(cityList) {
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
                console.log('fetched citires');
                dispatch(_fetchCityApiStatus(false));
                dispatch(_fetchCityList(res.data));
            })
            .catch(err => {
                dispatch(_fetchCityApiStatus(false, [err]));
            });
    };
}
