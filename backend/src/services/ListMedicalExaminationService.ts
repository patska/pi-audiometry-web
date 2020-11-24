
import { Connection, createConnection, getRepository } from "typeorm";
import MedicalExamination from "../model/MedicalExamination";


class ListMedicalExaminationService {

    public async execute (): Promise<MedicalExamination[]> {

        const medicalExamRepository = getRepository(MedicalExamination);

        const medicalExams = await medicalExamRepository.find();
        console.log(medicalExams);
        
        return medicalExams;
    }

}

export default ListMedicalExaminationService;