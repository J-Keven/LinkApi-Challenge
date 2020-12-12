import IInsertOrderDTO from '../dtos/IInsertOrderDTO';

export default interface IERPService {
  insertOrder(data: IInsertOrderDTO): Promise<void>;
}
