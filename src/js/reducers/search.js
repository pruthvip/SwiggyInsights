import ActionConstants from '../ActionConstants';

const initialState = {
    searchParam: {
        city: null,
        area: null,
        cuisines: null
    },
    searchApiStatus: {
        inProgress: false,
        errors: []
    }
};

export default (state = initialState    , action) => {
    switch (action.type) {
        case ActionConstants.UPDATE_SEARCH_API_STATUS:
            const searchApiStatus = {
                ...state.searchApiStatus,
                inProgress: action.inProgress,
                errors: action.errors
            };

            return {
                ...state,
                loginApiStatus
            };

        case ActionConstants.UPDATE_LOGGED_IN_USER:
            return {
                ...state,
                ...{
                    user: action.user
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
