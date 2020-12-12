import ICreateDTO from '../dtos/ICreateDTO';
import IOrderDTO from '../dtos/IOrderDTO';

export default interface IOpportunitiesService {
  findAll(): Promise<IOrderDTO[]>;
  findByCode(code: number): Promise<IOrderDTO | null>;
  create(data: ICreateDTO): Promise<IOrderDTO>;
}
