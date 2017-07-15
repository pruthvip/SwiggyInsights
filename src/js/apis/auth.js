import {BaseApi} from '../apis';

export default {
    login: (params) => {
        return BaseApi.post('rest-one-proxy/login', params);
    }
};
