import { Request, Response } from 'express';
import { GetCartUseCase } from './GetCartUseCase';

export class GetCartController {
  constructor(private getCartUseCase: GetCartUseCase) {}

  handle = async (req: Request, res: Response) => {
    const id = req.params.id;

    const cart = await this.getCartUseCase.execute({ userId: id });

    res.json(cart);
  };
}
