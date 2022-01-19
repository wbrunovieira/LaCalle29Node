import { response, request, Router } from 'express';

//import uploadConfig from '../config/upload';

import CreateUserService from '../services/CreateUserService';

//import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const usersRouter = Router();


interface User {
    name: string;
    password: string;
    email: string;
    phone: string;
}

usersRouter.post('/', async (request, response) => {

    const { name, email, phone, password } = request.body;

    const createUser = new CreateUserService();

    const user: User = await createUser.execute({
        name,
        email,
        phone,
        password,

    })

    //delete user.password;

    return response.json(user);

    //    return response.status(400).json({ error: "erro caramba" });

})



export default usersRouter;
