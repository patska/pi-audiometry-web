import { hash } from "bcryptjs";
import { Connection, createConnection, getRepository } from "typeorm";
import AppError from "../errors/AppError";
import HealthcareProfessional from "../model/HealthcareProfessional";

interface Request {
    name: string;
    userName: string;
    password: string;
}

class CreateNewHealthcareProfessionalService {

    public async execute ({ name, userName, password}: Request): Promise<HealthcareProfessional> {

        const healthcareProfessionalRepository = getRepository(HealthcareProfessional);

        const checkProfessionalExists = await healthcareProfessionalRepository.findOne({
            where: { userName }
        });

        if(checkProfessionalExists) throw new AppError('Username already used');

        const hashedPassword = await hash(password, 8);

        const healthcareProfessional = healthcareProfessionalRepository.create({
            name, 
            userName, 
            password: hashedPassword
        });

        await healthcareProfessionalRepository.save(healthcareProfessional);

        return healthcareProfessional;
    }

}

export default CreateNewHealthcareProfessionalService;