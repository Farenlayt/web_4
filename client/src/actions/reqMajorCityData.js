import majorCityReducer from "../reducers/majorCityReducer";

const defaultLat = 59.9386300;
const defaultLon = 30.3141300;

const weatherLink = "http://localhost:8081/weather/coordinates";

async function getData(dispatch, latitude, longitude) {
    const reqLink = `${weatherLink}?lat=${latitude}&lon=${longitude}`;
    const fetchResult = await fetch(reqLink);
    if (fetchResult.ok) {
        const json = await fetchResult.json();
        return dispatch(majorCityReducer.actions.receiveMajorCitySuccess(json));
    } else {
        return dispatch(majorCityReducer.actions.receiveMajorCityFailure(`Нет города с координатами: [${latitude}, ${longitude}]`));
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

