import { Router, Request, Response } from 'express';
import usersRouter from './users.routes';
import usersSession from './sessions.routes';

const routes = Router();


routes.use('/users', usersRouter);
routes.use('/session', usersSession);

routes.get('/', (request: Request, response: Response) => {
    response.json({message: "Hello"})
})


export default routes
