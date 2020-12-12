import IDealDTO from '../dtos/IDealDTO';

export default interface ICRMService {
  getDeals(status: string): Promise<IDealDTO[] | undefined>;
}
