import 'dotenv/config';

import express, { Response, Request, NextFunction } from 'express';
import 'express-async-errors';
import cors from 'cors';
import routes from './routes';
import handlingErrors from '../middleware/handlingErrors';
import connection from '../mongoose/connection';

const app = express();
app.use(express.json());

app.use(cors());
app.use(routes);

connection();

app.use(handlingErrors);

export default app;
