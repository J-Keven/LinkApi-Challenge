import mongoose from 'mongoose';
import IOrderDTO from '@order/dtos/IOrderDTO';

const Orderschema = new mongoose.Schema({
  orderValue: Number,
  code: {
    type: Number,
    unique: true,
  },
  date: Date,
  products_qtd: Number,
  cliente_name: String,
  cliente_email: String,
  salesman_name: String,
  description: String,
  created_at: {
    type: Date,
    default: new Date(),
  },
  updated_at: {
    type: Date,
    default: new Date(),
  },
});

export default mongoose.model<IOrderDTO>('Order', Orderschema);
