const fetch = require('node-fetch');

const link = /*"https://cors-anywhere.herokuapp.com/" + */"https://api.openweathermap.org/data/2.5/weather";
const key = "e9931f3a56608b6f3be9e93c5d8d26b4";

const weatherRequest = async function(url, response) {
    console.log(url);
    try {
        const result = await fetch(url);
        
        if (result.ok)
        {
            const payload = await result.json();
            await response.json(payload);
        }
        else
        {
            sendError("ServerError", response);
        }
    }
    catch (exception) {
        console.log(exception);
        sendError("ServerError", response);
    }
};

const sendError = function (error, response) {
    response.status(418).send();
};

const UrlByName = function(query){return `${link}?q=${query}&appid=${key}`;};
const UrlByCoords = function(lon, lat){return `${link}?lat=${lat}&lon=${lon}&appid=${key}`;};

module.exports = {weatherRequest, sendError, UrlByName, UrlByCoords};
