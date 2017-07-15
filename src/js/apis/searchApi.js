import {BaseApi} from '../apis';

export default {
    fetchCities: () => {
        return new Promise((resolve, reject) => {
            setTimeout(function(){
                resolve({
                    data: [
                        {
                            id: 1,
                            value: 'Bangalore'
                        },
                        {
                            id: 2,
                            value: 'New Delhi'
                        },
                        {
                            id: 3,
                            value: 'Kolkatta'
                        },
                    ]
                })
             }, 3000);
        });

        //return BaseApi.get('cities');
    },
    fetchCuisines: () => {
        return new Promise((resolve, reject) => {
            setTimeout(function(){
                resolve({
                    data: [
                        {
                            id: 1,
                            value: 'Biryani'
                        },
                        {
                            id: 2,
                            value: 'Mangao Shake'
                        },
                        {
                            id: 3,
                            value: 'Hallem'
                        },
                    ]
                })
            }, 3000);
        });

        return BaseApi.get('cuisines');
    },
    fetchAreas: (cityId) => {
        return new Promise((resolve, reject) => {
            setTimeout(function(){

            resolve({
                data: [
                    {
                        id: 1,
                        value: 'Kormangala'
                    },
                    {
                        id: 2,
                        value: 'Jayanagar'
                    },
                    {
                        id: 3,
                        value: 'J P Nagar'
                    },
                ]
            })
        }, 3000);
        });


        return BaseApi.get(`areas?cityId=${cityId}`);
    }
};
