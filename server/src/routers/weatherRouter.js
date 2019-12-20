import express from 'express';
import weatherController from '../controllers/weatherController.js';

const weatherRouter = express.Router();

weatherRouter.get('/', weatherController.weatherByName);
weatherRouter.get('/coordinates', weatherController.weatherByCoords);

export default weatherRouter;
