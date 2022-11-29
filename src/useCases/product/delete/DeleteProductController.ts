import { Request, Response } from 'express';
import { DeleteProductUseCase } from './DeleteProductUseCase';

export class DeleteProductController {
  constructor(private deleteProductUseCase: DeleteProductUseCase) {}

  handle = async (req: Request, res: Response) => {
    const id = req.params.id;

    await this.deleteProductUseCase.execute({
      deleteProductId: id,
    });

    res.sendStatus(204);
  };
}
