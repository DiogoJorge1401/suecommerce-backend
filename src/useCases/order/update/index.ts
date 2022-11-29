import { OrderModel } from '@/models/Order';
import { UpdateOrderController } from './UpdateOrderController';
import { UpdateOrderUseCase } from './UpdateOrderUseCase';

const updateOrderUseCase = new UpdateOrderUseCase(OrderModel);

export const updateOrderController = new UpdateOrderController(updateOrderUseCase);
