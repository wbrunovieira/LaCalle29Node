import 'reflect-metadata'

import express from 'express';

const app = express();
app.use(express.json());
import routes from './routes'

import './database';


app.use(routes);


app.listen(3333, () => console.log('Server in running  !!!! 😜 '));
