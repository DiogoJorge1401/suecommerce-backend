import { Request, Response } from 'express';
import { CreateCartUseCase } from './CreateCartUseCase';

export class CreateCartController {
  constructor(private updateCartUseCase: CreateCartUseCase) {}

  handle = async (req: Request, res: Response) => {
    const { products } = req.body;

    const result = await this.updateCartUseCase.execute({
      products,
      userId: req.user.id,
    });
    res.status(201).json(result);
  };
}
