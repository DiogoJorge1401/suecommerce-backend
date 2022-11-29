import { Document, Schema, model, Model } from 'mongoose';
import { ProductItem } from '@/dtos/ProductItem';

export interface IOrder extends Document {
  userId: string;
  products: ProductItem[];
  amount: number;
  address: object;
  status: string;
}

const schema = new Schema<IOrder>(
  {
    userId: { type: String, required: true, ref: 'User' },
    products: [
      {
        productId: { type: String, required: true, ref: 'Product' },
        quantity: { type: Number, default: 1 },
      },
    ],
    amount: { type: Number, required: true },
    address: { type: Object, required: true },
    status: { type: String, default: 'pending' },
  },
  { timestamps: true },
);

export const OrderModel = model<IOrder>('Order', schema);
export type IOrderModel = Model<IOrder>;
