import IOrderRepository from '@order/repositories/IOrderRepository';
import ICreateDTO from '@order/dtos/ICreateDTO';
import IOrderDTO from '@order/dtos/IOrderDTO';
import Order from '../schemas/Order';

class OrderRepository implements IOrderRepository {
  async findAll(): Promise<IOrderDTO[]> {
    const orders = Order.find();

    return orders;
  }

  async findByCode(code: number): Promise<IOrderDTO | null> {
    const order = Order.findOne({
      code,
    });

    return order;
  }

  async create(data: ICreateDTO): Promise<IOrderDTO> {
    const {
      code,
      cliente_email,
      cliente_name,
      date,
      description,
      products_qtd,
      salesman_name,
      orderValue,
    } = data;

    const order = await Order.create({
      code,
      orderValue,
      date,
      products_qtd,
      cliente_name,
      cliente_email,
      salesman_name,
      description,
    });
    return order;
  }
}

export default OrderRepository;
