import { Router } from 'express';


import AuthenticateUserService from '../services/AuthenticateUserService';


const sessionsRouter = Router();

interface User {

    email: string;
    password: string;
}

sessionsRouter.post('/', async (request, response) => {
   try {
    const { email, password }:User = request.body;

    const authenticateUser = new AuthenticateUserService();

     const   {user, token }= await authenticateUser.execute({
        email,
        password,
    });



    return response.json( {user, token} );

   } catch(err:any) {
       return response.status(400).json({ error: err.message });
   }
})

export default sessionsRouter;
