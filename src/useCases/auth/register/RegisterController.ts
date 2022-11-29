import { Request, Response } from 'express';
import { RegisterUseCase } from './RegisterUseCase';

export class RegisterController {
  constructor(private registerUseCase: RegisterUseCase) {}

  handle = async (req: Request, res: Response) => {
    const { username, email, password } = req.body;

    const result = await this.registerUseCase.execute({ username, email, password });

    res.status(201).json(result);
  };
}
