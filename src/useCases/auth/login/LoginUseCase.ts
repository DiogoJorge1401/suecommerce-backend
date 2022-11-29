/* eslint-disable @typescript-eslint/no-unused-vars */
import { AppError } from '@/errors/AppError';
import { IUserModel } from '@/models/User';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';

interface LoginProps {
  username: string;
  password: string;
}

export class LoginUseCase {
  constructor(private userModel: IUserModel) {}

  async execute({ password, username }: LoginProps) {
    if (!password || !username) throw new AppError('Missing Fields!');

    const userExists = await this.userModel.findOne({ username });

    if (!userExists) throw new AppError('Username or Password incorrect!');

    const passwordsMatch = await compare(password, userExists.password);

    if (!passwordsMatch) throw new AppError('Username or Password incorrect!');

    const JWT_SECRET = process.env.JWT_SECRET as string;

    const token = sign({ id: userExists._id, isAdmin: userExists.isAdmin }, JWT_SECRET, {
      expiresIn: '3d',
    });

    const { password: p, __v, ...user } = userExists.toObject();

    return { token, user };
  }
}
