import { hash } from "bcryptjs";
import { getRepository } from "typeorm";
import AppError from "../errors/AppError";
import HealthcareProfessional from "../model/HealthcareProfessional";

interface Request {
    name: string;
    userName: string;
    password: string
}

class UpdateHealthcareProfessional {

    public async execute ({ name, userName, password }: Request): Promise<HealthcareProfessional> {

        const healthcareProfessionalRepository = getRepository(HealthcareProfessional);

        const user = await healthcareProfessionalRepository.findOne({
            where: { userName }
        });
        if(!user) throw new AppError('User doesn´t exists');

        user.name = name;
        const hashedPassword = await hash(password, 8);
        user.password = hashedPassword;
        user.updated_at = new Date(Date.now());
        
        if(!user) throw new AppError('User doesn´t exists');

        await healthcareProfessionalRepository.save(user);

        return user;
    }

}

export default UpdateHealthcareProfessional;