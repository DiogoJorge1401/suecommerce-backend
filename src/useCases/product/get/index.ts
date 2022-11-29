import { ProductModel } from '@/models/Product';
import { GetProductController } from './GetProductController';
import { GetProductUseCase } from './GetProductUseCase';

const getProductUseCase = new GetProductUseCase(ProductModel);
export const getProductController = new GetProductController(getProductUseCase);
