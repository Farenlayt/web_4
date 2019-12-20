import fetch from 'node-fetch';

const link = "https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather";
const key = "e9931f3a56608b6f3be9e93c5d8d26b4";

const weatherRequest = async function(url, response) {
    console.log(url);
    const result = await fetch(url);
    console.log(result.ok);
    console.log(result);
    await response.send(result);
};

const sendError = function (error, response) {
    const result = {
        ok: false,
        errorMessage: error
    };
    response.send(result);
};

const UrlByName = function(query){return `${link}?q=${query}&appid=${key}`;};
const UrlByCoords = function(lon, lat){return `${link}?lat=${lat}&lon=${lon}&appid=${key}`;};

export {weatherRequest, sendError, UrlByName, UrlByCoords};
