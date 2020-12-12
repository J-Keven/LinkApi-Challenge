import { Router } from 'express';
import OrderController from '@order/infra/controllers/OrderController';

const orderController = new OrderController();

const opportunitiesRoutes = Router();

opportunitiesRoutes.get('/', orderController.index);
opportunitiesRoutes.post('/', orderController.create);

export default opportunitiesRoutes;
