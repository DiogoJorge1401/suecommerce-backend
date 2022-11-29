import { IProductModel } from '@/models/Product';
import { AppError } from '@/errors/AppError';

interface CreateProductProps {
  title: string;
  description: string;
  price: number;
  img: string;
  categories: string[];
  size: string[];
  color: string[];
  inStock: boolean;
}

export class CreateProductUseCase {
  constructor(private productModel: IProductModel) {}

  async execute({ description, price, title, ...rest }: CreateProductProps) {
    if (!title || !description || !price) throw new AppError('Missing Fields!');

    const result = await this.productModel.create({
      description,
      price,
      title,
      ...rest,
    });

    return result;
  }
}
