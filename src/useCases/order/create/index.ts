import { OrderModel } from '@/models/Order';
import { CreateOrderController } from './CreateOrderController';
import { CreateOrderUseCase } from './CreateOrderUseCase';

const createOrderUseCase = new CreateOrderUseCase(OrderModel);
export const createOrderController = new CreateOrderController(createOrderUseCase);
