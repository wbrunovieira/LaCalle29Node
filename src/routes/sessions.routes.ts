import { Router } from 'express';


import AuthenticateUserService from '../services/AuthenticateUserService';


const sessionsRouter = Router();

interface User {

    email: string;
    password: string;
}

sessionsRouter.post('/', async (request, response) => {
  
    const { email, password }:User = request.body;

    const authenticateUser = new AuthenticateUserService();

     const   {user, token }= await authenticateUser.execute({
        email,
        password,
    });



    return response.json( {user, token} );


})

export default sessionsRouter;
