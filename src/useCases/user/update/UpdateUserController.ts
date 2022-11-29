import { Request, Response } from 'express';
import { UpdateUserUseCase } from './UpdateUserUseCase';

export class UpdateUserController {
  constructor(private updateUserUseCase: UpdateUserUseCase) {}

  handle = async (req: Request, res: Response) => {
    const { username, email, password } = req.body;

    const id = req.params.id;

    const user = await this.updateUserUseCase.execute({
      updateUserId: id,
      data: { username, email, password },
    });

    res.json(user);
  };
}
