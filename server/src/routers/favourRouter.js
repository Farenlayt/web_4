const express = require('express');
const favourCitiesController = require('../controllers/favourCitiesController.js');

const favourRouter = express.Router();

favourRouter.get('/', favourCitiesController.getFavourList);
favourRouter.post('/', favourCitiesController.updateFavourList);
favourRouter.delete('/', favourCitiesController.removeFromFavour);

module.exports =  favourRouter;