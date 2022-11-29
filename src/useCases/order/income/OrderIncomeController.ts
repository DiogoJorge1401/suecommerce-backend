import { Request, Response } from 'express';
import { OrderIncomeUseCase } from './OrderIncomeUseCase';

export class OrderIncomeController {
  constructor(private orderIncomeUseCase: OrderIncomeUseCase) {}

  handle = async (req: Request, res: Response) => {
    const stats = await this.orderIncomeUseCase.execute();

    return res.json(stats);
  };
}
