import { Router } from 'express';
import opportunitiesRoutes from '@opportunities/infra/routes/opportunities.routes';

const appRoutes = Router();

appRoutes.use('/opportunities', opportunitiesRoutes);

export default appRoutes;
