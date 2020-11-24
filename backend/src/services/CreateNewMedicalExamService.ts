import { getRepository } from "typeorm";
import AppError from "../errors/AppError";
import MedicalExamination from "../model/MedicalExamination";
import Patient from "../model/Patient";

interface Request {
    result: string;
    cpf: string;
}

class CreateNewMedicalExamService {

    public async execute ({ result, cpf }: Request): Promise<MedicalExamination> {

        const patientExaminationRepository = getRepository(Patient);

        const patient = await patientExaminationRepository.findOne({
            where: { cpf }
        });

        if(!patient) throw new AppError('Username does not exists');

        console.log(result);
        console.log(patient);

        const medicalExaminationRepository = getRepository(MedicalExamination);
        const medicalExamination = medicalExaminationRepository.create({
            result, 
            patient
        });
        console.log(medicalExamination);
        await medicalExaminationRepository.save(medicalExamination);

        return medicalExamination;
    }

}

export default CreateNewMedicalExamService;