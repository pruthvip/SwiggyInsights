import {BaseApi} from '../apis';

export default {
    fetchCities: () => {
        return BaseApi.get('cities');
    },
    fetchCuisines: () => {
        return BaseApi.get('cuisines');
    },
    fetchAreas: (cityId) => {
        return BaseApi.get(`areas?cityId=${cityId}`);
    }
};
