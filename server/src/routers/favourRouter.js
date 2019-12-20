import express from 'express';
import favourCitiesController from '../controllers/favourCitiesController.js';

const favourRouter = express.Router();

favourRouter.get('/', favourCitiesController.getFavourList);
favourRouter.post('/', favourCitiesController.updateFavourList);
favourRouter.delete('/', favourCitiesController.removeFromFavour);

export default favourRouter;