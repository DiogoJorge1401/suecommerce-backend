import { Router } from 'express';
import { isAdmin } from '@/middlewares/isAdmin';
import { verifyAuthorization } from '@/middlewares/verifyAuthorization';
import { verifyToken } from '@/middlewares/verifyToken';
import { createOrderController } from '@/useCases/order/create';
import { deleteOrderController } from '@/useCases/order/delete';
import { getOrderController } from '@/useCases/order/get';
import { getAllOrderController } from '@/useCases/order/getAll';
import { orderIncomeController } from '@/useCases/order/income';
import { updateOrderController } from '@/useCases/order/update';

const orderRouter = Router();

orderRouter.post('/', verifyToken, createOrderController.handle);

orderRouter.get('/', verifyToken, isAdmin, getAllOrderController.handle);

orderRouter.get('/income', verifyToken, isAdmin, orderIncomeController.handle);

orderRouter.get('/:id', verifyToken, verifyAuthorization, getOrderController.handle);

orderRouter.delete('/:id', verifyToken, isAdmin, deleteOrderController.handle);

orderRouter.put('/:id', verifyToken, isAdmin, updateOrderController.handle);

export { orderRouter };
