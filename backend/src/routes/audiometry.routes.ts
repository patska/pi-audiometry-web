import { Router } from 'express';
import AudiometryService from '../services/AudiometryService';

const audiometryRouter = Router();

audiometryRouter.get('/', async (request, response) => {
    const audiometryService = new AudiometryService();
    const resultObject = await audiometryService.execute();
    return response.json(resultObject);
})

audiometryRouter.get('/teste', async (request, response) => {

    return response.json({ message : 'Hello World!'});
})

export default audiometryRouter;