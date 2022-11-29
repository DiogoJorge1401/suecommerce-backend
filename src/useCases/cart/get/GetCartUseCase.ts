import { AppError } from '@/errors/AppError';
import { ICartModel } from '@/models/Cart';

interface GetCartProps {
  userId: string;
}

export class GetCartUseCase {
  constructor(private cartModel: ICartModel) {}

  async execute({ userId }: GetCartProps) {
    const cart = await this.cartModel.findOne(
      { userId },
      {
        __v: false,
      },
    );

    if (!cart) throw new AppError("Cart doesn't exist");

    return cart;
  }
}
