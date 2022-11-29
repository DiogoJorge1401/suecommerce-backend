import { Request, Response } from 'express';
import { CreateProductUseCase } from './CreateProductUseCase';

export class CreateProductController {
  constructor(private updateProductUseCase: CreateProductUseCase) {}

  handle = async (req: Request, res: Response) => {
    const result = await this.updateProductUseCase.execute(req.body);
    res.status(201).json(result);
  };
}
