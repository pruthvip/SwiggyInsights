import ActionConstants from '../ActionConstants';

const initialState = {
    searchParam: {
        city: {},
        area: {},
        cuisines: {}
    },
    searchApiStatus: {
        inProgress: false,
        errors: []
    },
    cityApiStatus: {
        inProgress: false,
        errors: []
    },
    cuisineListApiStatus: {
        inProgress: false,
        errors: []
    },
    areaListApiStatus: {
        inProgress: false,
        errors: []
    },
    resultApiStatus: {
        inProgress: false,
        errors: []
    },
    cityList: [],
    areaDetails: [],
    areaList: [],
    selectedCityId: null,
    selectedAreaId: 0,
    selectedCuisineId: 0
};


export default (state = initialState, action) => {
    switch (action.type) {
        case ActionConstants.UPDATE_SEARCH_API_STATUS:
            const searchApiStatus = {
                ...state.searchApiStatus,
                inProgress: action.inProgress,
                errors: action.errors
            };

            return {
                ...state,
                searchApiStatus
            };

        case ActionConstants.UPDATE_CITY_API_STATUS:
            const cityApiStatus = {
                ...state.cityApiStatus,
                inProgress: action.inProgress,
                errors: action.errors
            };

            return {
                ...state,
                cityApiStatus
            };

        case ActionConstants.UPDATE_CUISINE_API_STATUS:
            const cuisineListApiStatus = {
                ...state.cuisineListApiStatus,
                inProgress: action.inProgress,
                errors: action.errors
            };

            return {
                ...state,
                cuisineListApiStatus
            };

        case ActionConstants.UPDATE_AREA_LIST_API_STATUS:
            const areaListApiStatus = {
                ...state.areaListApiStatus,
                inProgress: action.inProgress,
                errors: action.errors
            };

            return {
                ...state,
                areaListApiStatus
            };

        case ActionConstants.UPDATE_RESULT_API_STATUS:
            const resultApiStatus = {
                ...state.resultApiStatus,
                inProgress: action.inProgress,
                errors: action.errors
            };

            return {
                ...state,
                resultApiStatus
            };


        case ActionConstants.UPDATE_CITY_LIST:
            return {
                ...state,
                ...{
                    selectedCityId: action.cityList[0].id,
                    cityList: action.cityList
                }
            };
        case ActionConstants.UPDATE_AREA_LIST:
            return {
                ...state,
                ...{
                    areaList: action.areaList
                }
            };

        case ActionConstants.UPDATE_CUISINE_LIST:
            return {
                ...state,
                ...{
                    cuisineList: action.cuisineList
                }
            };

        case ActionConstants.UPDATE_SELECTED_CUISINE:
            return {
                ...state,
                ...{
                    selectedCuisineId: action.selectedCuisineId
                }
            };

        case ActionConstants.UPDATE_SELECTED_AREA:
            return {
                ...state,
                ...{
                    selectedAreaId: action.selectedAreaId
                }
            };

        default:
            return state;
    }
};
