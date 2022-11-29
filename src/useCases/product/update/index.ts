import { ProductModel } from '@/models/Product';
import { UpdateProductController } from './UpdateProductController';
import { UpdateProductUseCase } from './UpdateProductUseCase';

const updateProductUseCase = new UpdateProductUseCase(ProductModel);

export const updateProductController = new UpdateProductController(updateProductUseCase);
