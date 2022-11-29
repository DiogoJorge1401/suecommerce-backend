import { Request, Response } from 'express';
import { UpdateOrderUseCase } from './UpdateOrderUseCase';

export class UpdateOrderController {
  constructor(private updateOrderUseCase: UpdateOrderUseCase) {}

  handle = async (req: Request, res: Response) => {
    const result = await this.updateOrderUseCase.execute({
      updateOrderId: req.params.id,
      data: req.body,
    });

    res.json(result);
  };
}
