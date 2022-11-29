import { Request, Response } from 'express';
import { LoginUseCase } from './LoginUseCase';

export class LoginController {
  constructor(private loginUseCase: LoginUseCase) {}

  handle = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    const { token, user } = await this.loginUseCase.execute({ username, password });

    return res.json({ ...user, token });
  };
}
