import { CartModel } from '@/models/Cart';
import { GetAllCartsController } from './GetAllCartsController';
import { GetAllCartsUseCase } from './GetAllCartsUseCase';

const getAllCartUseCase = new GetAllCartsUseCase(CartModel);
export const getAllCartController = new GetAllCartsController(getAllCartUseCase);
