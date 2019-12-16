const express = require('express');
const weatherController = require('../controllers/weatherController.js');

const weatherRouter = express.Router();

weatherRouter.get('/', weatherController.weatherByName);
weatherRouter.get('/coordinates', weatherController.weatherByCoords);

export default weatherRouter;
