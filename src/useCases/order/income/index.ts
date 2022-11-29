import { OrderModel } from '@/models/Order';
import { OrderIncomeController } from './OrderIncomeController';
import { OrderIncomeUseCase } from './OrderIncomeUseCase';

const orderIncomeUseCase = new OrderIncomeUseCase(OrderModel);
export const orderIncomeController = new OrderIncomeController(orderIncomeUseCase);
