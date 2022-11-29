import { IOrderModel } from '@/models/Order';
import { AppError } from '@/errors/AppError';
import { ProductItem } from '@/dtos/ProductItem';

interface CreateOrderProps {
  userId: string;
  products: ProductItem[];
  amount: number;
  address: object;
}

export class CreateOrderUseCase {
  constructor(private orderModel: IOrderModel) {}

  async execute({ products, userId, address, amount }: CreateOrderProps) {
    if (!products || !products.length || !userId || !address || !amount)
      throw new AppError('Missing Fields!');

    const result = await this.orderModel.create({
      products,
      userId,
      address,
      amount,
    });

    return result;
  }
}
