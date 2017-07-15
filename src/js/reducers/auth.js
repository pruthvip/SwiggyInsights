import ActionConstants from '../ActionConstants';

const initialState = {
    authApiStatus: {
        inProgress: false,
        errors: null
    },
    user: {}
};

export default (state = initialState    , action) => {
    switch (action.type) {
        case ActionConstants.UPDATE_LOGIN_API_STATUS:
            const loginApiStatus = {
                ...state.authApiStatus,
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
