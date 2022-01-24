import 'reflect-metadata';

import express, {Request, Response, NextFunction} from 'express';
import AppError from './errors/AppError'

const app = express();
import 'express-async-errors';

app.use(express.json());

import routes from './routes';

import './database';

app.use(routes);

app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
        if (err instanceof AppError) {
            return response
                .status(err.statusCode)
                .json({ status: 'error', message: err.message });
        }

        return response
            .status(500)
            .json({ status: 'error', message: 'Internal server error' });
    },
);

app.listen(3333, () => console.log('Server in running  !!!! 😜 '));
