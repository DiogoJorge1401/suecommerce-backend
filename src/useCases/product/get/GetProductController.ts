import { Request, Response } from 'express';
import { GetProductUseCase } from './GetProductUseCase';

export class GetProductController {
  constructor(private getProductUseCase: GetProductUseCase) {}

  handle = async (req: Request, res: Response) => {
    const id = req.params.id;

    const product = await this.getProductUseCase.execute({
      getProductId: id,
    });

    res.json(product);
  };
}
