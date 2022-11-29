import { AppError } from '@/errors/AppError';
import { IProductModel } from '@/models/Product';

interface DeleteProductProps {
  deleteProductId: string;
}

export class DeleteProductUseCase {
  constructor(private productModel: IProductModel) {}

  async execute({ deleteProductId }: DeleteProductProps) {
    const product = await this.productModel.findById(deleteProductId);

    if (!product) throw new AppError("Product doesn't exist");

    await product.deleteOne();
  }
}
