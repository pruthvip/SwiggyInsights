import {BaseApi} from '../apis';

export default {
    fetchCities: () => {
        return BaseApi.get('governance/get_cities');
    },
    fetchCuisineList: (cityId = 1) => {
        return BaseApi.get(`governance/get_cuisines?city_id=${cityId}`);
    },
    fetchAreas: (cityId = 1) => {
        return BaseApi.get(`governance/get_areas?city_id=${cityId}`);
    },
    fetchAreaDetails(areaId) {
        return BaseApi.get(`governance/get_area_details?area_id=${areaId}`);
    },
    fetchCuisineWiseDetails(cityId, cuisineId) {
        return BaseApi.get(`governance/get_cuisine_areas?cuisine_id=${cuisineId}`);
    },

    fetchAreaWiseResults(cityId, areaId) {
        return BaseApi.get(`/governance/get_area_cuisines?area_id=${areaId}`);
    }
};
