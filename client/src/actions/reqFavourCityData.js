import favourCityReducer from "../reducers/favourCityReducer";

const weatherLink = "http://localhost:8081/weather";
const favourLink = "http://localhost:8081/favorites";

async function getData(dispatch, cityName) {
    const reqLink = `${weatherLink}?city=${cityName}`;
    const fetchResult = await fetch(reqLink);
    if (fetchResult.ok) {
        const json = await fetchResult.json();
            await fetch(favourLink, {
                    method: "POST",
                    mode: "cors",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({name: json.name})
                }
            );
        return dispatch(favourCityReducer.actions.receiveFavourSuccess(json));
    } else {
        return dispatch(favourCityReducer.actions.receiveFavourFailure(cityName));
    }
}

const removeCity = function (cityName) {
    return async function(dispatch) {
        await fetch(favourLink, {
                method: "DELETE",
                mode: "cors",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name: cityName})
            }
        );
        dispatch(favourCityReducer.actions.removefavourCity(cityName));
    }
};

const updateCities = function() {
    return async function(dispatch) {
        fetch(favourLink)
            .then(function (data) {return data.json()})
            .then(function(cities) {
                if (cities) {
                    for (const cityName of cities) {
                        dispatch(requestfavourCityData(cityName));
                    }
                }
            });
    };
};

const requestfavourCityData = function(cityName) {
    return async function(dispatch) {
        dispatch(favourCityReducer.actions.requestFavourData(cityName));
        await getData(dispatch, cityName);
    };
};
export {requestfavourCityData, removeCity, updateCities};