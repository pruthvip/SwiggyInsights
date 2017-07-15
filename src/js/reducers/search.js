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
    cityList: []
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

        case ActionConstants.UPDATE_CITY_LIST:
            return {
                ...state,
                ...{
                    cityList: action.cityList
                }
            };

        default:
            return state;
    }
};


export function isLoggedIn(store) {
    if (store.getState().auth.user.id) {
        return true
    }

    return false;
}
