import { CartModel } from '@/models/Cart';
import { DeleteCartController } from './DeleteCartController';
import { DeleteCartUseCase } from './DeleteCartUseCase';

const deleteCartUseCase = new DeleteCartUseCase(CartModel);
export const deleteCartController = new DeleteCartController(deleteCartUseCase);
