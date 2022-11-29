import { ProductModel } from '@/models/Product';
import { DeleteProductController } from './DeleteProductController';
import { DeleteProductUseCase } from './DeleteProductUseCase';

const deleteProductUseCase = new DeleteProductUseCase(ProductModel);
export const deleteProductController = new DeleteProductController(deleteProductUseCase);
