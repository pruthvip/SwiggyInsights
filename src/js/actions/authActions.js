import ActionConstants from '../ActionConstants';
import {AuthApi} from '../apis';

function _updateLoginApi(inProgress, errors = null) {
    return {
        type: ActionConstants.UPDATE_LOGIN_API_STATUS,
        inProgress,
        errors
    };
}

function _updateUser(user) {
    return {
        type: ActionConstants.UPDATE_LOGGED_IN_USER,
        user
    };
}

export function login(params) {
    return (dispatch) => {
        dispatch(_updateLoginApi(true));

        return AuthApi.login(params)
            .then(res => {
                dispatch(_updateLoginApi(false));
                dispatch(_updateUser(res.data));
            })
            .catch(err => {
                console.error(err);
            });
    };
}
