import { getRepository } from 'typeorm';


import Adress from '../models/Adresses';

interface Request {
    user_id: string;
    adress: string;
    adress_complement: string;
    zip: string;
    zone: string;
    city: string;
    obs?: string;
}

class CreateAdressService {
    public async execute({
        user_id, adress, adress_complement, zip, zone, city, obs
    }: Request): Promise<Adress> {
        const userRepository = getRepository(Adress);

        const newAdress = userRepository.create({
            adress, adress_complement, zip, zone, city, obs, user_id,

        })

        await userRepository.save(newAdress);

        return newAdress;
    }
}

export default CreateAdressService;
