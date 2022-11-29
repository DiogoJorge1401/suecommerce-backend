import { IOrderModel } from '@/models/Order';

export class GetAllOrdersUseCase {
  constructor(private orderModel: IOrderModel) {}

  async execute() {
    const orders = await this.orderModel.find({}, { __v: false });

    return orders;
  }
}
