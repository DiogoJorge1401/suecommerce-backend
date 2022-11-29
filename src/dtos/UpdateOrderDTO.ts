import { ProductItem } from './ProductItem';

export interface UpdateOrderDTO {
  products: ProductItem[];
  amount: number;
  address: object;
  status: string;
}
