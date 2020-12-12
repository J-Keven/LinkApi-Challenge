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
      unit_value,
      salesman_name,
      products_qtd,
      description,
      date,
    } = data;

    const order = await this.orderRepository.create({
      code,
      cliente_email,
      cliente_name,
      date,
      description,
      products_qtd,
      salesman_name,
      unit_value,
    });

    return order;
  }
}

export default CreateOrderService;
