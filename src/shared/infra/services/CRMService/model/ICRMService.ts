import IOrderDTO from '../dtos/IDealDTO';

export default interface ICRMService {
  getOrder(): Promise<IOrderDTO[] | undefined>;
}
