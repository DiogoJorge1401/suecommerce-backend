import { AppError } from '@/errors/AppError';
import { IOrderModel } from '@/models/Order';

interface DeleteOrderProps {
  deleteOrderId: string;
}

export class DeleteOrderUseCase {
  constructor(private orderModel: IOrderModel) {}

  async execute({ deleteOrderId }: DeleteOrderProps) {
    const order = await this.orderModel.findById(deleteOrderId);

    if (!order) throw new AppError("Order doesn't exist");

    await order.deleteOne();
  }
}
