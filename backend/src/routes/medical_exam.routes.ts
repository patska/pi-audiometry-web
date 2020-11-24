import { Router } from 'express';
import { getRepository } from 'typeorm';
import MedicalExamination from '../model/MedicalExamination';
import Patient from '../model/Patient';
import CreateNewMedicalExamService from '../services/CreateNewMedicalExamService';
import CreateNewPatientService from '../services/CreateNewPatientService';
import ListMedicalExaminationService from '../services/ListMedicalExaminationService';

const medicalExamRouter = Router();

medicalExamRouter.get('/', async (request, response) => {
    const listMedicalExamsService = new ListMedicalExaminationService();
    const medicalExams = await listMedicalExamsService.execute();
    return response.json(medicalExams);
})

medicalExamRouter.post('/', async (request,response) => {
    
    const { result, cpf } = request.body;

    const createMedicalExam = new CreateNewMedicalExamService();

    const healthCareProfessional = await createMedicalExam.execute({
        result, 
        cpf
    });

    return response.json(healthCareProfessional);

});

export default medicalExamRouter;