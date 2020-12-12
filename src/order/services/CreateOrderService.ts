import IOrderRepository from '../repositories/IOrderRepository';
import ICreateDTO from '../dtos/ICreateDTO';
import IOrderDTO from '../dtos/IOrderDTO';

class CreateOrderService {
  private orderRepository: IOrderRepository;

  constructor(orderRepository: IOrderRepository) {
    this.orderRepository = orderRepository;
  }

  async execute(data: ICreateDTO): Promise<IOrderDTO> {
    const {
      code,
      cliente_email,
      cliente_name,
      orderValue,
      salesman_name,
      products_qtd,
      description,
      date,
    } = data;

    let order = await this.orderRepository.findByCode(code);

    if (!order) {
      order = await this.orderRepository.create({
        code,
        cliente_email,
        cliente_name,
        date,
        description,
        products_qtd,
        salesman_name,
        orderValue,
      });
    }

    return order;
  }
}

export default CreateOrderService;
