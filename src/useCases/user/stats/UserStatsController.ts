import { Request, Response } from 'express';
import { UserStatsUseCase } from './UserStatsUseCase';

export class UserStatsController {
  constructor(private getUserUseCase: UserStatsUseCase) {}

  handle = async (req: Request, res: Response) => {
    const stats = await this.getUserUseCase.execute();
    return res.json(stats);
  };
}
