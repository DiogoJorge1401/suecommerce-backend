import { Request, Response } from 'express';
import { GetAllProductsUseCase } from './GetAllProductsUseCase';

export class GetAllProductsController {
  constructor(private getAllProductUseCase: GetAllProductsUseCase) {}

  handle = async (req: Request, res: Response) => {
    const products = await this.getAllProductUseCase.execute(req.query as any);

    res.json(products);
  };
}
