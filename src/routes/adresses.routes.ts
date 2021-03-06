import { response, request, Router } from 'express';
import { getRepository, getConnection } from 'typeorm';
import Adress from '../models/Adresses';

//import uploadConfig from '../config/upload';

import CreateAdressService from '../services/CreateAdressService';

import ensureAuthenticated from '../middleware/ensureAuthenticated';

const adressRouter = Router();

adressRouter.use(ensureAuthenticated);

adressRouter.post('/', ensureAuthenticated, async (request, response) => {
    interface Adress {
        adress: string;
        adress_complement: string;
        zip: string;
        zone: string;
        city: string;
        obs?: string;
        user_id: string;
    }
    

        const { adress, adress_complement, zip, zone, city, obs }: Adress =
            request.body;

        const createAdress = new CreateAdressService();

        const newAdress: Adress = await createAdress.execute({
            user_id: request.user.id,
            adress,
            adress_complement,
            zip,
            zone,
            city,
            obs,
        });
        return response.json(newAdress);

});

adressRouter.get('/', ensureAuthenticated, async (request, response) => {
    const userRepository = getRepository(Adress);

    const adresses = await userRepository.find()

    return response.json(adresses)
})


export default adressRouter;
