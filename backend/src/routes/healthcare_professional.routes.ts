import { Router } from 'express';
import { getRepository } from 'typeorm';
import { stringify } from 'uuid';
import HealthcareProfessioanl from '../model/HealthcareProfessional';

import CreateNewHealthcareProfessionalService from '../services/CreateNewHealthcareProfessionalService';
import DeleteHealthcareProfessional from '../services/DeleteHealthcareProfessional';
import UpdateHealthcareProfessional from '../services/UpdateHealthcareProfessional';

const healthCareProfessionalRouter = Router();

healthCareProfessionalRouter.get('/', async (request,response) => {
    
    return response.json(await getRepository(HealthcareProfessioanl).find());

});

healthCareProfessionalRouter.post('/', async (request,response) => {
    
    const { name, userName , password } = request.body;

    const createHealthcareProfessional = new CreateNewHealthcareProfessionalService();

    const healthCareProfessional = await createHealthcareProfessional.execute({
        name, 
        userName, 
        password
    });

    return response.json(healthCareProfessional);

});

healthCareProfessionalRouter.delete('/', async (request, response) => {
    const { userName } = request.body;

    const deleteHealthcareProfessional = new DeleteHealthcareProfessional();
    const healthCareProfessional = await deleteHealthcareProfessional.execute({
        userName 
    });

    return response.json(healthCareProfessional);
});

healthCareProfessionalRouter.put('/', async (request, response) => {
    const { name, userName , password } = request.body;

    const updateHealthcareProfessiona = new UpdateHealthcareProfessional;
    const healthCareProfessional = await updateHealthcareProfessiona.execute({
        name, 
        userName, 
        password 
    });

    return response.json(healthCareProfessional);
});

export default healthCareProfessionalRouter;