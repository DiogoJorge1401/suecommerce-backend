import { AppError } from '@/errors/AppError';
import { IOrderModel } from '@/models/Order';

interface GetOrderProps {
  userId: string;
}

export class GetOrderUseCase {
  constructor(private orderModel: IOrderModel) {}

  async execute({ userId }: GetOrderProps) {
    const orders = await this.orderModel.find(
      { userId },
      {
        __v: false,
      },
    );

    if (!orders) throw new AppError("Order doesn't exist");

    return orders;
  }
}
