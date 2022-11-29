import { AppError } from '@/errors/AppError';
import { IProductModel } from '@/models/Product';

interface GetProductProps {
  getProductId: string;
}

export class GetProductUseCase {
  constructor(private productModel: IProductModel) {}

  async execute({ getProductId }: GetProductProps) {
    const product = await this.productModel.findById(getProductId, {
      __v: false,
    });

    if (!product) throw new AppError("Product doesn't exist");

    return product;
  }
}
