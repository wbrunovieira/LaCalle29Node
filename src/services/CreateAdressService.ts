import { getRepository } from 'typeorm';


import Adress from '../models/Adresses';

interface Request {
    adress: string;
    adress_complement: string;
    zip: string;
    zone: string;
    city: string;
    obs?: string;
}

class CreateUserService {
    public async execute({
         adress, adress_complement, zip, zone, city, obs
    }: Request): Promise<Adress> {
        const userRepository = getRepository(Adress);


        const newAdress = userRepository.create({
            adress, adress_complement, zip, zone, city, obs,

        })

        await userRepository.save(newAdress);

        return newAdress;
    }
}

export default CreateUserService;
