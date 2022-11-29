import { Document, Model, model, Schema } from 'mongoose';

export interface IProduct extends Document {
  title: string;
  description: string;
  img: string;
  categories: string[];
  size: string[];
  color: string[];
  price: number;
  inStock: boolean;
}

const schema = new Schema<IProduct>(
  {
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    img: { type: String, default: '' },
    categories: { type: [String], default: [] },
    size: { type: [String], default: [] },
    color: { type: [String], default: [] },
    inStock: { type: Boolean, default: true },
  },
  { timestamps: true },
);

export const ProductModel = model<IProduct>('Product', schema);
export type IProductModel = Model<IProduct>;
