import {createSlice} from "redux-starter-kit";

const favourCityReducer = createSlice({
        name: 'favourCity',
        initialState: {
            cities: []
        },
        reducers: {
            requestFavourData: function(state, action) {
                const cityName = action.payload.cityName;
                const stateWithout = state.cities.filter(function(city) {return city.cityData.name.toUpperCase() !== cityName.toUpperCase();}).length;
                if (state.cities.length !== stateWithout)
                return Object.assign({}, state);
                else return Object.assign({}, state, {
                    cities: state.cities.filter(function(city) {return city.cityData.name.toUpperCase() !== action.payload.toUpperCase();}).concat({
                        isUpdating: true,
                        cityData: {name: cityName}
                    })
                });
            },
            receiveFavourSuccess: function(state, action) {
                console.log(action);
                console.log(action.payload);
                return {cities: updateObjectInArray(state.cities, action.payload, false)};
            },
            receiveFavourFailure: function(state, action) {
                return Object.assign({}, state, {cities: updateObjectInArray(state.cities, {name: action.payload}, true)});
            },
            removefavourCity: function(state, action) {
                return Object.assign({}, state, {cities: state.cities.filter(function(c) {return !compareCityNameStrings(c.cityData.name, action.payload);})});
            }
        }
    }
);

function updateObjectInArray(array, payload, isError) {
    return array.map(function(item) {
        if (!compareCityNameStrings(item.cityData.name, payload.name)) {
            return item
        } else {
            if (isError) {
                return {cityData: {name: payload.name}, isUpdating: false, error: `Города с именем ${payload.name} нет.`};
            } else {
                return {cityData: payload, cityName: payload.name, isUpdating: false, error: null};
            }
        }
    })
}

function compareCityNameStrings(city1, city2) {
    return city1.toUpperCase().includes(city2.toUpperCase()) || city2.toUpperCase().includes(city1.toUpperCase());
}

export default favourCityReducer;
