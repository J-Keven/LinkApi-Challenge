import { Document } from 'mongoose';

export default interface IOrderDTO extends Document {
  orderValue: number;
  code: number;
  date: Date;
  products_qtd: number;
  cliente_name: string;
  cliente_email: string;
  salesman_name: string;
  description: string;
}
