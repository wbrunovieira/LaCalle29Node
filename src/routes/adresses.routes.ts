import { response, request, Router } from 'express';

//import uploadConfig from '../config/upload';

import CreateAdressService from '../services/CreateAdressService';

//import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const adressRouter = Router();

interface Adress {
    adress: string;
    adress_complement: string;
    zip: string;
    zone?: string;
    city: string;
    obs?: string;
}

adressRouter.post('/', async (request, response) => {
    try {
        const { adress, adress_complement, zip, zone, city, obs} = request.body;

        const createAdress = new CreateAdressService();

        const newAdress: Adress = await createAdress.execute({
            adress, adress_complement, zip, zone, city, obs,
        });
        return response.json(newAdress);
    } catch (err:any) {
        return response.status(400).json({ error: err.message });
    }
});

export default adressRouter;
