import { Request, Response } from 'express';
import { GetAllOrdersUseCase } from './GetAllOrdersUseCase';

export class GetAllOrdersController {
  constructor(private getAllOrderUseCase: GetAllOrdersUseCase) {}

  handle = async (req: Request, res: Response) => {
    const orders = await this.getAllOrderUseCase.execute();

    res.json(orders);
  };
}
