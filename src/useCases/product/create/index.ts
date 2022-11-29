import { ProductModel } from '@/models/Product';
import { CreateProductController } from './CreateProductController';
import { CreateProductUseCase } from './CreateProductUseCase';

const createProductUseCase = new CreateProductUseCase(ProductModel);
export const createProductController = new CreateProductController(createProductUseCase);
