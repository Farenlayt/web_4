import majorCityReducer from "../reducers/majorCityReducer";

const endpoint = "https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather";
let appId = "e9931f3a56608b6f3be9e93c5d8d26b4";

const defaultLat = 59.9386300;
const defaultLon = 30.3141300;


async function getData(dispatch, latitude, longitude) {
    const address = `${endpoint}?lat=${latitude}&lon=${longitude}&appid=${appId}`;
    const fetchResult = await fetch(address);
    if (fetchResult.ok) {
        const json = await fetchResult.json();
        return dispatch(majorCityReducer.actions.receiveMajorCitySuccess(json));
    } else {
        return dispatch(majorCityReducer.actions.receiveMajorCityFailure(`No city with coordinates [${latitude}, ${longitude}]`));
    }
}

async function dispatchAux(dispatch, latitude, longitude) {
    dispatch(majorCityReducer.actions.requestMajorData());
    return await getData(dispatch, latitude, longitude);
}

export const requestMajorData = function() {
    return async function(dispatch) {
        if (!navigator.geolocation) {
            return dispatchAux(dispatch, defaultLat, defaultLon);
        } else {
            navigator.geolocation.getCurrentPosition(function(position) {
                    return dispatchAux(dispatch, position.coords.latitude, position.coords.longitude);
                },
                function(error) {
                    return dispatchAux(dispatch, defaultLat, defaultLon);
                });
        }
    }
};

