import { Request, Response } from 'express';
import { GetOrderUseCase } from './GetOrderUseCase';

export class GetOrderController {
  constructor(private getOrderUseCase: GetOrderUseCase) {}

  handle = async (req: Request, res: Response) => {
    const id = req.params.id;

    const order = await this.getOrderUseCase.execute({ userId: id });

    res.json(order);
  };
}
