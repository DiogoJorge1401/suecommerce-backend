import { isAdmin } from '@/middlewares/isAdmin';
import { verifyAuthorization } from '@/middlewares/verifyAuthorization';
import { verifyToken } from '@/middlewares/verifyToken';
import { createCartController } from '@/useCases/cart/create';
import { deleteCartController } from '@/useCases/cart/delete';
import { getCartController } from '@/useCases/cart/get';
import { getAllCartController } from '@/useCases/cart/getAll';
import { updateCartController } from '@/useCases/cart/update';
import { Router } from 'express';

const cartRouter = Router();

cartRouter.post('/', verifyToken, createCartController.handle);

cartRouter.get('/', verifyToken, isAdmin, getAllCartController.handle);

cartRouter.get('/:id', verifyToken, verifyAuthorization, getCartController.handle);

cartRouter.delete('/:id', verifyToken, deleteCartController.handle);

cartRouter.put('/:id', verifyToken, updateCartController.handle);

export { cartRouter };
