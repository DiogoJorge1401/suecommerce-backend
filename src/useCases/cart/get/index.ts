import { CartModel } from '@/models/Cart';
import { GetCartController } from './GetCartController';
import { GetCartUseCase } from './GetCartUseCase';

const getCartUseCase = new GetCartUseCase(CartModel);
export const getCartController = new GetCartController(getCartUseCase);
