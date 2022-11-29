import { OrderModel } from '@/models/Order';
import { GetOrderController } from './GetOrderController';
import { GetOrderUseCase } from './GetOrderUseCase';

const getOrderUseCase = new GetOrderUseCase(OrderModel);
export const getOrderController = new GetOrderController(getOrderUseCase);
