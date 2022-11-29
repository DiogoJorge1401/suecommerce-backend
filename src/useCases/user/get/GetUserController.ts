import { Request, Response } from 'express';
import { GetUserUseCase } from './GetUserUseCase';

export class GetUserController {
  constructor(private getUserUseCase: GetUserUseCase) {}

  handle = async (req: Request, res: Response) => {
    const id = req.params.id;

    const user = await this.getUserUseCase.execute({
      getUserId: id,
    });

    res.json(user);
  };
}
