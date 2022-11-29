import { Request, Response } from 'express';
import { CreateOrderUseCase } from './CreateOrderUseCase';

export class CreateOrderController {
  constructor(private updateOrderUseCase: CreateOrderUseCase) {}

  handle = async (req: Request, res: Response) => {
    const { products, address, amount } = req.body;

    const result = await this.updateOrderUseCase.execute({
      products,
      userId: req.user.id,
      address,
      amount,
    });

    res.status(201).json(result);
  };
}
