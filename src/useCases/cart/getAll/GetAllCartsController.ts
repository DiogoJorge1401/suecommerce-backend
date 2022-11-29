import { Request, Response } from 'express';
import { GetAllCartsUseCase } from './GetAllCartsUseCase';

export class GetAllCartsController {
  constructor(private getAllCartUseCase: GetAllCartsUseCase) {}

  handle = async (req: Request, res: Response) => {
    const carts = await this.getAllCartUseCase.execute();

    res.json(carts);
  };
}
