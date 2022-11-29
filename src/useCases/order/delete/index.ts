import { OrderModel } from '@/models/Order';
import { DeleteOrderController } from './DeleteOrderController';
import { DeleteOrderUseCase } from './DeleteOrderUseCase';

const deleteOrderUseCase = new DeleteOrderUseCase(OrderModel);
export const deleteOrderController = new DeleteOrderController(deleteOrderUseCase);
