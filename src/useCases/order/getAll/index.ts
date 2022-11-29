import { OrderModel } from '@/models/Order';
import { GetAllOrdersController } from './GetAllOrdersController';
import { GetAllOrdersUseCase } from './GetAllOrdersUseCase';

const getAllOrderUseCase = new GetAllOrdersUseCase(OrderModel);
export const getAllOrderController = new GetAllOrdersController(getAllOrderUseCase);
