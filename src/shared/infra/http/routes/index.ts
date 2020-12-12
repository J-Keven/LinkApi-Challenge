import { Router } from 'express';
import opportunitiesRoutes from '@order/infra/routes/order.routes';

const appRoutes = Router();

appRoutes.use('/orders', opportunitiesRoutes);

export default appRoutes;
