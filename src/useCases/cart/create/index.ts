import { CartModel } from '@/models/Cart';
import { CreateCartController } from './CreateCartController';
import { CreateCartUseCase } from './CreateCartUseCase';

const createCartUseCase = new CreateCartUseCase(CartModel);
export const createCartController = new CreateCartController(createCartUseCase);
