import { Router } from 'express';
import audiometryRouter from './audiometry.routes';
import healcareProfessionalRouter from './healthcare_professional.routes';
import patientRouter from './patient.routes';
import medicalExaminationRouter from './medical_exam.routes';

const routes = Router();

routes.use('/audiometry', audiometryRouter);
routes.use('/healthcare', healcareProfessionalRouter);
routes.use('/patient', patientRouter);
routes.use('/medicalexam', medicalExaminationRouter);


export default routes;