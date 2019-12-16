const express = require('express');
const favorCitiesController = require('../controllers/favorCitiesController.js');

const favourRouter = express.Router();

favourRouter.get('/', favorCitiesController.getFavourList);
favourRouter.post('/', favorCitiesController.updateFavourList);
favourRouter.delete('/', favorCitiesController.removeFromFavour);

export default favourRouter;