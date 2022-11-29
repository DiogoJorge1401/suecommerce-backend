import { UpdateOrderDTO } from '@/dtos/UpdateOrderDTO';
import { AppError } from '@/errors/AppError';
import { IOrderModel } from '@/models/Order';

interface UpdateOrderProps {
  updateOrderId: string;
  data: UpdateOrderDTO;
}

export class UpdateOrderUseCase {
  constructor(private orderModel: IOrderModel) {}

  async execute({ data, updateOrderId }: UpdateOrderProps) {
    const order = await this.orderModel.findById(updateOrderId);

    if (!order) throw new AppError("Order doesn't exist");

    return await this.orderModel.findByIdAndUpdate(updateOrderId, data, { new: true });
  }
}
