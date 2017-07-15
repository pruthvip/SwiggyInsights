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
    fetchCuisineList: () => {
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
    },

    fetchAreaDetails(areaId) {
        return new Promise((resolve, reject) => {
            setTimeout(function () {
                const data = {
                	"feature_type": "locality",
                	"polygon": {
                		"coordinates": [
                			[
                				[77.6466069, 12.9785359],
                				[77.647481, 12.978578],
                				[77.647413, 12.979303],
                				[77.6473999, 12.979464],
                				[77.6473920999999, 12.9797381],
                				[77.648021, 12.98],
                				[77.647946, 12.980275],
                				[77.6478959999999, 12.9809319],
                				[77.6478301, 12.98104],
                				[77.6476829, 12.9812699],
                				[77.647657, 12.981342],
                				[77.647652, 12.98137],
                				[77.647655, 12.981405],
                				[77.6476669999999, 12.981453],
                				[77.6477119, 12.9815201],
                				[77.6477581, 12.98157],
                				[77.6478191, 12.981608],
                				[77.647882, 12.98163],
                				[77.647944, 12.981648],
                				[77.6479669, 12.981677],
                				[77.648005, 12.9818641],
                				[77.6480799, 12.9823039],
                				[77.6481180000001, 12.9825479],
                				[77.64813, 12.9827039],
                				[77.6481490999999, 12.982729],
                				[77.648023, 12.98301],
                				[77.6478621, 12.9833079],
                				[77.646888, 12.983003],
                				[77.6457639, 12.9825989],
                				[77.6457459000001, 12.982595],
                				[77.645723, 12.9827131],
                				[77.6456889, 12.982875],
                				[77.645589, 12.983349],
                				[77.6455410999999, 12.983552],
                				[77.6453871, 12.984258],
                				[77.645257, 12.9849011],
                				[77.6451641, 12.9853291],
                				[77.645088, 12.985672],
                				[77.64508, 12.985708],
                				[77.6450090000001, 12.9856851],
                				[77.6440061000001, 12.985298],
                				[77.6424399, 12.9846851],
                				[77.6413001, 12.984284],
                				[77.640725, 12.9841039],
                				[77.640581, 12.9840549],
                				[77.640484, 12.984018],
                				[77.6403571000001, 12.9839711],
                				[77.6399099, 12.9837951],
                				[77.639156, 12.983495],
                				[77.638554, 12.9832789],
                				[77.638139, 12.98312],
                				[77.638046, 12.9830829],
                				[77.6375479999999, 12.9828829],
                				[77.637419, 12.982845],
                				[77.63719, 12.9827679],
                				[77.636889, 12.982699],
                				[77.6366359, 12.982642],
                				[77.6357889999999, 12.982555],
                				[77.6351959, 12.982496],
                				[77.6341089, 12.982405],
                				[77.633767, 12.9823781],
                				[77.6334289, 12.982333],
                				[77.6328349, 12.982241],
                				[77.632615, 12.9821989],
                				[77.632431, 12.9821359],
                				[77.632238, 12.9820699],
                				[77.6320299, 12.981969],
                				[77.6319040999999, 12.981909],
                				[77.631792, 12.981841],
                				[77.6315219000001, 12.981673],
                				[77.63143, 12.9816141],
                				[77.631351, 12.981602],
                				[77.6311860000001, 12.9814569],
                				[77.630721, 12.9810429],
                				[77.630658, 12.980983],
                				[77.630546, 12.98086],
                				[77.6303230999999, 12.980624],
                				[77.6300398999999, 12.980293],
                				[77.629589, 12.979643],
                				[77.629552, 12.979594],
                				[77.6293370000001, 12.9792939],
                				[77.6291969, 12.9791001],
                				[77.6290739999999, 12.9789789],
                				[77.6287228, 12.9784829],
                				[77.6286620000001, 12.978391],
                				[77.628551, 12.9782441],
                				[77.628518, 12.9782009],
                				[77.6284889, 12.9781669],
                				[77.6283959, 12.978056],
                				[77.628361, 12.9780161],
                				[77.62843, 12.977974],
                				[77.6289421, 12.9776611],
                				[77.6290789, 12.9775769],
                				[77.6293949999999, 12.977383],
                				[77.62947, 12.977338],
                				[77.6297890000001, 12.9771581],
                				[77.6299309999999, 12.977079],
                				[77.630031, 12.9770239],
                				[77.6300900999999, 12.9769911],
                				[77.6307631, 12.9766889],
                				[77.6307881, 12.976677],
                				[77.6313600999999, 12.9764209],
                				[77.6315101, 12.9763531],
                				[77.6315539, 12.97633],
                				[77.6316141, 12.976297],
                				[77.631727, 12.976219],
                				[77.631791, 12.976143],
                				[77.632235, 12.9755431],
                				[77.632342, 12.9753951],
                				[77.632424, 12.975281],
                				[77.632499, 12.975134],
                				[77.6325489000001, 12.9750319],
                				[77.6325941, 12.9748361],
                				[77.6326661000001, 12.9745831],
                				[77.6327079, 12.974347],
                				[77.6328161, 12.9739021],
                				[77.6328450999999, 12.973805],
                				[77.6329529, 12.9734061],
                				[77.6330029000001, 12.973221],
                				[77.6330389, 12.9732291],
                				[77.633176, 12.972752],
                				[77.633238, 12.972607],
                				[77.6332649999999, 12.97254],
                				[77.633272, 12.972524],
                				[77.633276, 12.972514],
                				[77.633276, 12.972513],
                				[77.63328, 12.972504],
                				[77.633287, 12.9724819],
                				[77.6333179000001, 12.972393],
                				[77.633323, 12.972379],
                				[77.6333420999999, 12.972318],
                				[77.6333589999999, 12.972266],
                				[77.63337, 12.972232],
                				[77.6333859, 12.972199],
                				[77.6334461, 12.9720739],
                				[77.6334509999999, 12.972056],
                				[77.6334781, 12.971958],
                				[77.6335149, 12.971844],
                				[77.6335391, 12.9717389],
                				[77.63357, 12.971603],
                				[77.633606, 12.9714731],
                				[77.6336309999999, 12.971382],
                				[77.6336699999999, 12.9712901],
                				[77.633691, 12.9711921],
                				[77.6337550000001, 12.971017],
                				[77.6337889, 12.970913],
                				[77.6338020000001, 12.970889],
                				[77.6338020000001, 12.970888],
                				[77.633814, 12.970863],
                				[77.6338259, 12.9708389],
                				[77.6338259, 12.9708381],
                				[77.633834, 12.9708221],
                				[77.633834, 12.970821],
                				[77.6338541, 12.970781],
                				[77.6339511, 12.970822],
                				[77.6344329999999, 12.971024],
                				[77.6349061, 12.9712231],
                				[77.6350859, 12.9713021],
                				[77.6351910000001, 12.971347],
                				[77.635395, 12.971435],
                				[77.635682, 12.9715611],
                				[77.6358210000001, 12.9716221],
                				[77.6359709999999, 12.971681],
                				[77.6359649999999, 12.9712309],
                				[77.63595, 12.9708069],
                				[77.635946, 12.9707029],
                				[77.635935, 12.9704309],
                				[77.635928, 12.970329],
                				[77.6359190000001, 12.970188],
                				[77.63591, 12.970011],
                				[77.6359049, 12.9698529],
                				[77.6359090999999, 12.969725],
                				[77.6359199, 12.969447],
                				[77.6359259999999, 12.969291],
                				[77.635933, 12.9692191],
                				[77.635953, 12.969045],
                				[77.6359809, 12.968923],
                				[77.635993, 12.968888],
                				[77.6361010000001, 12.968584],
                				[77.636222, 12.9683411],
                				[77.6365321000001, 12.9677959],
                				[77.636652, 12.967529],
                				[77.6367898999999, 12.9672719],
                				[77.636856, 12.967159],
                				[77.6370159000001, 12.966824],
                				[77.637171, 12.966606],
                				[77.637586, 12.96608],
                				[77.6376990999999, 12.9659359],
                				[77.6381729, 12.965385],
                				[77.6382049, 12.9653479],
                				[77.6384081, 12.965154],
                				[77.6384998, 12.9650551],
                				[77.6388709, 12.964775],
                				[77.6389340000001, 12.964722],
                				[77.639725, 12.964262],
                				[77.6397718, 12.9642351],
                				[77.639889, 12.96416],
                				[77.6399311, 12.964133],
                				[77.640664, 12.963764],
                				[77.6408981, 12.96364],
                				[77.641559, 12.9633559],
                				[77.6417841037048, 12.960599670438],
                				[77.64553910849, 12.9602996425104],
                				[77.6463767435691, 12.9626051750741],
                				[77.6466882772129, 12.96348609849],
                				[77.6444892565129, 12.9641997306787],
                				[77.6442110904762, 12.9662438632906],
                				[77.6425806956297, 12.9663563192475],
                				[77.6425596238037, 12.967117],
                				[77.6441571, 12.967146],
                				[77.644865, 12.967167],
                				[77.645088, 12.967159],
                				[77.645862, 12.9674131],
                				[77.645942, 12.967435],
                				[77.64715, 12.9678061],
                				[77.6476181, 12.9679501],
                				[77.6478870999999, 12.9680319],
                				[77.6475219, 12.9697709],
                				[77.6470329, 12.9722529],
                				[77.6470049, 12.9724099],
                				[77.6468529, 12.974024],
                				[77.6468500999999, 12.9740901],
                				[77.6468808, 12.974164],
                				[77.646845, 12.9747228],
                				[77.6468359, 12.974898],
                				[77.6467829000001, 12.975841],
                				[77.6466859, 12.9773409],
                				[77.6466789, 12.9774589],
                				[77.6466609, 12.9777491],
                				[77.6466139, 12.9784751],
                				[77.6466069, 12.9785359]
                			]
                		],
                		"type": "polygon"
                	},
                	"center": [77.6402173264603, 12.9745568088619],
                	"name": "Indira Nagar",
                	"uuid": "1e061f8e9d640f9abe6d",
                	"_score": 1.0,
                	"id": 33522
                };

                resolve({data: data});

            }, 3000)
        });
    }
};
