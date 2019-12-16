const fetch = require('node-fetch');

const link = "https://api.openweathermap.org/data/2.5/weather";
const key = "e9931f3a56608b6f3be9e93c5d8d26b4";

const weatherRequest = async function(url, response) {
    const result = await fetch(url);
    await response.result(result);
    // if (fetchResult.status === 200) {
    //     const result = {
    //         ok: true,
    //         payload: await fetchResult.json()
    //     };
    //     await response.json(result);
    // } else {
    //     const result = {
    //         ok: false,
    //         errorMessage: "Server error"
    //     };
    //     await response.json(result);
    // }
};

const sendError = function (error, response) {
    const result = {
        ok: false,
        errorMessage: error
    };
    response.send(result);
};

const UrlByName = function(query){return `${link}?q=${query}&appid=${key}`;};
const UrlByCoords = function(lon, lat){return `${link}?lon=${lon}&lat=${lat}&appid=${key}`;};

export {weatherRequest, sendError, UrlByName, UrlByCoords};
