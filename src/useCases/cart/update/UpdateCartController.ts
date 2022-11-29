import { Request, Response } from 'express';
import { UpdateCartUseCase } from './UpdateCartUseCase';

export class UpdateCartController {
  constructor(private updateCartUseCase: UpdateCartUseCase) {}

  handle = async (req: Request, res: Response) => {
    const result = await this.updateCartUseCase.execute({
      user: req.user,
      updateCartId: req.params.id,
      data: req.body,
    });

    res.json(result);
  };
}
