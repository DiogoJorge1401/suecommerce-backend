import { AppError } from '@/errors/AppError';
import { ICartModel } from '@/models/Cart';
import { TokenPayload } from '@/dtos/TokenPayload';

interface DeleteCartProps {
  user: TokenPayload;
  deleteCartId: string;
}

export class DeleteCartUseCase {
  constructor(private cartModel: ICartModel) {}

  async execute({ deleteCartId, user }: DeleteCartProps) {
    const cart = await this.cartModel.findById(deleteCartId);

    if (!cart) throw new AppError("Cart doesn't exist");

    if (cart.userId !== user.id && !user.isAdmin) throw new AppError('Not Authorized!', 403);

    await cart.deleteOne();
  }
}
