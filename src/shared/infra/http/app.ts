import 'dotenv/config';

import express from 'express';
import cors from 'cors';
import 'express-async-errors';
import routes from './routes';
import handlingErrors from '../middleware/handlingErrors';
import connection from '../mongoose/connection';

const app = express();

app.use(handlingErrors);

app.use(express.json());
app.use(cors());

connection();

app.use(routes);

export default app;
