import { getRepository } from "typeorm";
import AppError from "../errors/AppError";
import HealthcareProfessional from "../model/HealthcareProfessional";

interface Request {
    userName: string;
}

class DeleteHealthcareProfessional {

    public async execute ({ userName}: Request): Promise<HealthcareProfessional[]> {

        const healthcareProfessionalRepository = getRepository(HealthcareProfessional);

        const user = await healthcareProfessionalRepository.findOne({
            where: { userName }
        });

        if(!user) throw new AppError('User doesn´t exists');
        await healthcareProfessionalRepository.remove(user);
        const users = await healthcareProfessionalRepository.find();

        return users;
    }

}

export default DeleteHealthcareProfessional;