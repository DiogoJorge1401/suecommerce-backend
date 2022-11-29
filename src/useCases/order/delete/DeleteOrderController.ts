import { Request, Response } from 'express';
import { DeleteOrderUseCase } from './DeleteOrderUseCase';

export class DeleteOrderController {
  constructor(private deleteOrderUseCase: DeleteOrderUseCase) {}

  handle = async (req: Request, res: Response) => {
    const id = req.params.id;

    await this.deleteOrderUseCase.execute({
      deleteOrderId: id,
    });

    res.sendStatus(204);
  };
}
