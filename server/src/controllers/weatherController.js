const {UrlByCoords, UrlByName, weatherRequest, sendError} = require("../auxiliary/auxiliary.js");

const weatherByCoords = async function (request, response) {
    if (!request.query){
        const error = "Получен некорректный запрос.";
        sendError(error, response);
    }
    const lon = request.query.lon;
    const lat = request.query.lat;
    if (!lon || !lat) {
        const error = "Нет широты или долготы.";
        sendError(error, response);
    }
    else {
        const url = UrlByCoords(lon, lat);
        await weatherRequest(url, response);
    }
};

const weatherByName = async function (request, response) {
    if (!request.query){
        const error = "Получен некорректный запрос.";
        sendError(error, response);
    }
    const name = request.query.city;
    if (!name) {
        const error = "В запросе отсутствует имя.";
        sendError(error, response);
    }
    const url = UrlByName(name);
    await weatherRequest(url, response);
};

export default {weatherByCoords, weatherByName}
