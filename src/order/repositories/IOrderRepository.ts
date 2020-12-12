import ICreateDTO from '../dtos/ICreateDTO';
import IOrderDTO from '../dtos/IOrderDTO';

export default interface IOpportunitiesService {
  findAll(): Promise<IOrderDTO[]>;
  findByDay(day: Date): Promise<IOrderDTO | null>;
  create(data: ICreateDTO): Promise<IOrderDTO>;
  save(order: IOrderDTO): Promise<IOrderDTO>;
}
