import { response, request, Router } from 'express';

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
    try {
        
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
    } catch (err: any) {
        return response.status(400).json({ error: err.message });
    }
});

export default adressRouter;
