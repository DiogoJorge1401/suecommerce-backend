import { Request, Response } from 'express';
import { UpdateProductUseCase } from './UpdateProductUseCase';

export class UpdateProductController {
  constructor(private updateProductUseCase: UpdateProductUseCase) {}

  handle = async (req: Request, res: Response) => {
    const result = await this.updateProductUseCase.execute({
      updateProductId: req.params.id,
      data: req.body,
    });

    res.json(result);
  };
}
