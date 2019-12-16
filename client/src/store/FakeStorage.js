// import configureMockStore from "redux-mock-store";
// import thunk from "redux-thunk";

// const FakeStorage = configureMockStore([thunk]);
// const storage = FakeStorage({
//     majorCityReducer: {
//         isUpdating: false,
//         error: null,
//         cityData: {
//                 "coord": {
//                 "lon": 55.1,
//                 "lat": 51.77
//                 },
//                 "weather": [
//                 {
//                 "id": 800,
//                 "main": "Clear",
//                 "description": "clear sky",
//                 "icon": "01n"
//                 }
//                 ],
//                 "base": "stations",
//                 "main": {
//                 "temp": 255.15,
//                 "pressure": 1042,
//                 "humidity": 77,
//                 "temp_min": 255.15,
//                 "temp_max": 255.15
//                 },
//                 "visibility": 10000,
//                 "wind": {
//                 "speed": 3,
//                 "deg": 280
//                 },
//                 "clouds": {
//                 "all": 0
//                 },
//                 "dt": 1574389959,
//                 "sys": {
//                 "type": 1,
//                 "id": 9044,
//                 "country": "RU",
//                 "sunrise": 1574394579,
//                 "sunset": 1574425312
//                 },
//                 "timezone": 18000,
//                 "id": 515003,
//                 "name": "Orenburg",
//                 "cod": 200
//                 }
//     },
//     favourCityReducer: {
//         cities: [
//             {
//                 cityData: {
//                 "coord": {
//                     "lon": 30.52,
//                     "lat": 50.43
//                     },
//                     "weather": [
//                     {
//                     "id": 803,
//                     "main": "Clouds",
//                     "description": "broken clouds",
//                     "icon": "04n"
//                     }
//                     ],
//                     "base": "stations",
//                     "main": {
//                     "temp": 264.93,
//                     "pressure": 1037,
//                     "humidity": 61,
//                     "temp_min": 264.15,
//                     "temp_max": 265.37
//                     },
//                     "visibility": 10000,
//                     "wind": {
//                     "speed": 6,
//                     "deg": 110
//                     },
//                     "clouds": {
//                     "all": 64
//                     },
//                     "dt": 1574389632,
//                     "sys": {
//                     "type": 1,
//                     "id": 8903,
//                     "country": "UA",
//                     "sunrise": 1574400167,
//                     "sunset": 1574431525
//                     },
//                     "timezone": 7200,
//                     "id": 703448,
//                     "name": "Kiev",
//                     "cod": 200
//                 },
//                 cityName: 'Kiev',
//                 isUpdating: false,
//                 error: null
//             }
//         ]
//     }
// });
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import favourCityReducer from "../reducers/favourCityReducer";

const FakeStorage = configureMockStore([thunk]);
const storage = FakeStorage({
majorCityReducer:{

},
favourCityReducer:{
    cities:[
        {
            cityData: {
                coord: {
                lon: 30.52,
                lat: 50.43
                },
                weather: [
                {
                id: 803,
                main: "Clouds",
                description: "broken clouds",
                icon: "04n"
                }
                ],
                base: "stations",
                main: {
                temp: 264.93,
                pressure: 1037,
                humidity: 61,
                temp_min: 264.15,
                temp_max: 265.37
                },
                visibility: 10000,
                wind: {
                speed: 6,
                deg: 110
                },
                clouds: {
                all: 64
                },
                dt: 1574389632,
                sys: {
                type: 1,
                id: 8903,
                country: "UA",
                sunrise: 1574400167,
                sunset: 1574431525
                },
                timezone: 7200,
                id: 703448,
                name: "Kiev",
                cod: 200
            },
            cityName: 'Kiev',
            isUpdating: false,
            error: null
        },
        {
            cityData: {
                name: 'asdasdas'
            },
            isUpdating: false,
            error: 'The city with name asdasdas doesn\'t exist'
        },
        {
            isUpdating: true,
            cityData: {
                name: 'Saint Petersburg'
            }
        }
        ]
}
});
export default storage;
