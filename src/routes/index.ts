import { Router, Request, Response } from 'express';
import usersRouter from './users.routes';

const routes = Router();


routes.use('/users', usersRouter);

routes.get('/', (request: Request, response: Response) => {
    response.json({message: "Hello"})
})


export default routes
