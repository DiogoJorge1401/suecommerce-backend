import { CartModel } from '@/models/Cart';
import { UpdateCartController } from './UpdateCartController';
import { UpdateCartUseCase } from './UpdateCartUseCase';

const updateCartUseCase = new UpdateCartUseCase(CartModel);

export const updateCartController = new UpdateCartController(updateCartUseCase);
