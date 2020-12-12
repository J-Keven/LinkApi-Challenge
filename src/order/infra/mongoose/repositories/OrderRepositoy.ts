import IOrderRepository from '@order/repositories/IOrderRepository';
import ICreateDTO from '@order/dtos/ICreateDTO';
import IOrderDTO from '@order/dtos/IOrderDTO';
import Order from '../schemas/Order';

class OrderRepository implements IOrderRepository {
  private orderRepository;

  constructor() {
    this.orderRepository = Order;
  }

  async findAll(): Promise<IOrderDTO[]> {
    const orders = this.orderRepository.find();

    return orders;
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
      unit_value,
    } = data;

    const order = await Order.create({
      code,
      unit_value,
      date,
      products_qtd,
      cliente_name,
      cliente_email,
      salesman_name,
      description,
    });
    return order;
  }

  async findByDay(day: Date): Promise<IOrderDTO | null> {
    const order = await this.orderRepository.findOne({
      date_colection: day,
    });

    return order;
  }

  async save(order: IOrderDTO): Promise<IOrderDTO> {
    order.save();

    return order;
  }
}

export default OrderRepository;
