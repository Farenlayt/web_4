import favourCityReducer from "../reducers/favourCityReducer";

const endpoint = "https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather";
let appId = "e9931f3a56608b6f3be9e93c5d8d26b4";

async function getData(dispatch, cityName) {
    const address = `${endpoint}?q=${cityName}&appid=${appId}`;
    const fetchResult = await fetch(address);
    if (fetchResult.ok) {
        const json = await fetchResult.json();
        return dispatch(favourCityReducer.actions.receiveFavourSuccess(json));
    } else {
        return dispatch(favourCityReducer.actions.receiveFavourFailure(cityName));
    }
}
export const requestfavourCityData = function(cityName) {
    return async function(dispatch) {
        dispatch(favourCityReducer.actions.requestFavourData(cityName));
        await getData(dispatch, cityName);
    };
};
