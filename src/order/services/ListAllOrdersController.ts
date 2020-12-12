import IOrderDTO from '../dtos/IOrderDTO';
import IOrderRepository from '../repositories/IOrderRepository';

class ListAllordersController {
  private orderRepository: IOrderRepository;

  constructor(orderRepository: IOrderRepository) {
    this.orderRepository = orderRepository;
  }

  async execute(): Promise<IOrderDTO[]> {
    const orders = this.orderRepository.findAll();

    return orders;
  }
}
export default ListAllordersController;
