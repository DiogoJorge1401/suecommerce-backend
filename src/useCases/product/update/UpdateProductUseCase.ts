import { UpdateProductDTO } from '@/dtos/UpdateProductDTO';
import { IProductModel } from '@/models/Product';
import { AppError } from '@/errors/AppError';

interface UpdateProductProps {
  updateProductId: string;
  data: UpdateProductDTO;
}

export class UpdateProductUseCase {
  constructor(private productModel: IProductModel) {}

  async execute({ data, updateProductId }: UpdateProductProps) {
    const product = await this.productModel.findById(updateProductId);

    if (!product) throw new AppError("Product doesn't exist");

    return await this.productModel.findByIdAndUpdate(updateProductId, data, { new: true });
  }
}
