import { TokenPayload } from '@/dtos/TokenPayload';
import { UpdateCartDTO } from '@/dtos/UpdateCartDTO';
import { AppError } from '@/errors/AppError';
import { ICartModel } from '@/models/Cart';

interface UpdateCartProps {
  user: TokenPayload;
  updateCartId: string;
  data: UpdateCartDTO;
}

export class UpdateCartUseCase {
  constructor(private cartModel: ICartModel) {}

  async execute({ data, updateCartId, user }: UpdateCartProps) {
    const cart = await this.cartModel.findById(updateCartId);

    if (!cart) throw new AppError("Cart doesn't exist");

    if (cart.userId !== user.id && !user.isAdmin) throw new AppError('Not Authorized!', 403);

    return await this.cartModel.findByIdAndUpdate(updateCartId, data, { new: true });
  }
}
