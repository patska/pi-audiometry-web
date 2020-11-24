import { Router } from 'express';
import audiometryRouter from './audiometry.routes';

const routes = Router();

routes.use('/audiometry', audiometryRouter);

export default routes;