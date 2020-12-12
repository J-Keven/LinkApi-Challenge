import { Request, Response } from 'express';
import CRMService from '@shared/infra/services/CRMService/implementations/PipledriveService';
import ERPService from '@shared/infra/services/ERPService/implementations/BlingService';
import CreateOrderService from '@order/services/CreateOrderService';
import OrderRepository from '@order/infra/mongoose/repositories/OrderRepositoy';
import ListAllOrdersController from '@order/services/ListAllOrdersController';

const crmService = new CRMService();
const erpService = new ERPService();

class OrderController {
  async index(request: Request, response: Response): Promise<Response> {
    const orderRepository = new OrderRepository();
    const listAllOrdersController = new ListAllOrdersController(
      orderRepository,
    );

    const orders = await listAllOrdersController.execute();
    return response.status(200).json(orders);
  }

  async create(request: Request, response: Response): Promise<Response> {
    const orderRepository = new OrderRepository();
    const createOrderService = new CreateOrderService(orderRepository);

    const opportunities = await crmService.getDeals('wow');

    let orders;

    // insert orders in Bling and create a collection in mongodb
    if (opportunities) {
      orders = await Promise.all(
        opportunities.map(async opportunity => {
          await erpService.insertOrder({
            code: opportunity.id,
            date: opportunity.add_time,
            description: opportunity.title,
            unit_value: opportunity.value / opportunity.products_count,
            products_qtd: opportunity.products_count,
            cliente_name: opportunity.person_id.name,
            cliente_email: opportunity.person_id.email.value,
            salesman_name: opportunity.user_id.name,
          });

          const newOrder = await createOrderService.execute({
            code: opportunity.id,
            date: opportunity.add_time,
            description: opportunity.title,
            orderValue: opportunity.value,
            products_qtd: opportunity.products_count,
            cliente_name: opportunity.person_id.name,
            cliente_email: opportunity.person_id.email.value,
            salesman_name: opportunity.user_id.name,
          });

          return newOrder;
        }),
      );
    }

    return response.status(201).json(orders);
  }
}

export default OrderController;
