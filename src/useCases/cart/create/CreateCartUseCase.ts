import { ICartModel } from '@/models/Cart';
import { AppError } from '@/errors/AppError';
import { ProductItem } from '@/dtos/ProductItem';

interface CreateCartProps {
  userId: string;
  products: ProductItem[];
}

export class CreateCartUseCase {
  constructor(private cartModel: ICartModel) {}

  async execute({ products, userId }: CreateCartProps) {
    if (!products || !products.length || !userId) throw new AppError('Missing Fields!');

    const result = await this.cartModel.create({
      products,
      userId,
    });

    return result;
  }
}
