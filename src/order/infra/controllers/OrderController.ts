import { Request, Response } from 'express';
import CRMService from '@shared/infra/services/CRMService/implementations/PipledriveService';
import ERPService from '@shared/infra/services/ERPService/implementations/BlingService';
import CreateOrderService from '@order/services/CreateOrderService';
import OrderRepository from '@order/infra/mongoose/repositories/OrderRepositoy';

const crmService = new CRMService();
const erpService = new ERPService();

class OrderController {
  async create(request: Request, response: Response): Promise<Response> {
    const data = await crmService.getOrder();
    const orderRepository = new OrderRepository();
    const createOrderService = new CreateOrderService(orderRepository);
    let orders;
    if (data && data.length) {
      orders = await Promise.all(
        data.map(async order => {
          await erpService.insertOrder({
            code: order.id,
            date: order.add_time,
            description: order.title,
            unit_value: order.value / order.products_count,
            products_qtd: order.products_count,
            cliente_name: order.person_id.name,
            cliente_email: order.person_id.email.value,
            salesman_name: order.user_id.name,
          });

          const newOrder = await createOrderService.execute({
            code: order.id,
            date: order.add_time,
            description: order.title,
            unit_value: order.value / order.products_count,
            products_qtd: order.products_count,
            cliente_name: order.person_id.name,
            cliente_email: order.person_id.email.value,
            salesman_name: order.user_id.name,
          });

          return newOrder;
        }),
      );
    }
    return response.status(201).json(orders);
  }
}

export default OrderController;
