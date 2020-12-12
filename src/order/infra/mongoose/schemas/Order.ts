import mongoose from 'mongoose';
import IOrderDTO from '@order/dtos/IOrderDTO';

const Orderschema = new mongoose.Schema({
  unit_value: Number,
  code: {
    unique: true,
    type: Number,
  },
  date: Date,
  products_qtd: Number,
  cliente_name: String,
  cliente_email: String,
  salesman_name: String,
  description: String,
});

export default mongoose.model<IOrderDTO>('Order', Orderschema);
