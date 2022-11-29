import { Document, Schema, model, Model } from 'mongoose';
import { ProductItem } from '@/dtos/ProductItem';

export interface ICart extends Document {
  userId: string;
  products: ProductItem[];
}

const schema = new Schema<ICart>(
  {
    userId: { type: String, required: true, ref: 'User' },
    products: [
      {
        productId: { type: String, required: true, ref: 'Product' },
        quantity: { type: Number, default: 1 },
      },
    ],
  },
  { timestamps: true },
);

export const CartModel = model<ICart>('Cart', schema);
export type ICartModel = Model<ICart>;
