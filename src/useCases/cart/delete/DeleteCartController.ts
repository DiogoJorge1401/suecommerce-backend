import { Request, Response } from 'express';
import { DeleteCartUseCase } from './DeleteCartUseCase';

export class DeleteCartController {
  constructor(private deleteCartUseCase: DeleteCartUseCase) {}

  handle = async (req: Request, res: Response) => {
    const id = req.params.id;

    await this.deleteCartUseCase.execute({
      user: req.user,
      deleteCartId: id,
    });

    res.sendStatus(204);
  };
}
