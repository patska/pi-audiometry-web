import { Router } from 'express';
import { getRepository } from 'typeorm';
import Patient from '../model/Patient';
import CreateNewPatientService from '../services/CreateNewPatientService';

const patientRouter = Router();

patientRouter.get('/', async (request, response) => {
    return response.json(await getRepository(Patient).find());
})

patientRouter.post('/', async (request,response) => {
    
    const { name, email, cpf , password } = request.body;

    const createPatient = new CreateNewPatientService();

    const healthCareProfessional = await createPatient.execute({
        name, 
        email,
        cpf, 
        password
    });

    return response.json(healthCareProfessional);

});

export default patientRouter;