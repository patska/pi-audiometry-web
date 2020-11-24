import { hash } from "bcryptjs";
import { Connection, createConnection, getRepository } from "typeorm";
import AppError from "../errors/AppError";
import HealthcareProfessional from "../model/HealthcareProfessional";
import Patient from "../model/Patient";

interface Request {
    name: string;
    email: string;
    cpf: string;
    password?: string;
}

class CreateNewPatientService {

    public async execute ({ name, email, cpf, password}: Request): Promise<Patient> {

        const patientRepository = getRepository(Patient);

        const checkProfessionalExists = await patientRepository.findOne({
            where: { cpf }
        });

        if(checkProfessionalExists) throw new AppError('Username already used');

        if (!password) password = cpf;

        const hashedPassword = await hash(password, 8);

        const patient = patientRepository.create({
            name, 
            email,
            cpf, 
            password: hashedPassword
        });

        await patientRepository.save(patient);

        return patient;
    }

}

export default CreateNewPatientService;