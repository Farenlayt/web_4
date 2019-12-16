const {sendError} = request('../auxiliary/auxiliary.js');
const Cities = require('../models/Cities.js');

const updateFavourList = async function(request, response) {
    try {
        const cityName = request.body.name;
        const exists = await Cities.find({name: {$regex: `${cityName}`, $options: "i"}});
        if (exists.length === 0) {
            const result = await (new Cities({name: cityName}).save());
            if (!result.ok) {
                const error = "При сохранении города вышла ошибочка :(";
                sendError(error, response);
                return;
            }
        }
        response.send({ok: true});
    } catch (error) {
        sendError(error, response);
    }
};

const removeFromFavour = async function(request, response) {
    try {
        const cityName = request.body.name;
        const result = await Cities.deleteOne({name: {$regex: `${cityName}`, $options: "i"}});
        if (result.ok) {
            response.send({ok: true});
        } else {
            response.send({ok: false});
        }
    } catch (error) {
        sendError(error, response);
    }
};

const getFavourList = async function(request, response) {
    try {
        const favours = await Cities.find({}, 'name');
        response.send(favours.map(function(city) {return city.name}));
    } catch (error) {
        sendError(error, response);
    }
};

export default {updateFavourList, removeFromFavour, getFavourList};
