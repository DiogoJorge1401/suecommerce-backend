import { Request, Response } from 'express';
import { DeleteUserUseCase } from './DeleteUserUseCase';

export class DeleteUserController {
  constructor(private deleteUserUseCase: DeleteUserUseCase) {}

  handle = async (req: Request, res: Response) => {
    const id = req.params.id;

    await this.deleteUserUseCase.execute({
      deleteUserId: id,
    });

    res.sendStatus(204);
  };
}
