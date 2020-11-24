import { Router } from 'express';
import audiometryRouter from './audiometry.routes';
import healcareProfessionalRouter from './healthcare_professional.routes';

const routes = Router();

routes.use('/audiometry', audiometryRouter);
routes.use('/healthcare', healcareProfessionalRouter);

export default routes;