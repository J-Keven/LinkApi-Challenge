import IInsertOrderDTO from '../dtos/IinsertOrderDTO';

export default interface IERPService {
  insertOrder(data: IInsertOrderDTO): Promise<void>;
}
