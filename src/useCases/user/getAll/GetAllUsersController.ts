import { Request, Response } from 'express';
import { GetAllUsersUseCase } from './GetAllUsersUseCase';

export class GetAllUsersController {
  constructor(private getAllUserUseCase: GetAllUsersUseCase) {}

  handle = async (req: Request, res: Response) => {
    const query = req.query.new as any;

    const users = await this.getAllUserUseCase.execute(query);

    res.json(users);
  };
}
