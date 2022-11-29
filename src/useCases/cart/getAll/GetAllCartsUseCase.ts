import { ICartModel } from '@/models/Cart';

export class GetAllCartsUseCase {
  constructor(private cartModel: ICartModel) {}

  async execute() {
    const carts = await this.cartModel.find({}, { __v: false });

    return carts;
  }
}
