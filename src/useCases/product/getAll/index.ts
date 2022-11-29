import { ProductModel } from '@/models/Product';
import { GetAllProductsController } from './GetAllProductsController';
import { GetAllProductsUseCase } from './GetAllProductsUseCase';

const getAllProductUseCase = new GetAllProductsUseCase(ProductModel);
export const getAllProductController = new GetAllProductsController(getAllProductUseCase);
