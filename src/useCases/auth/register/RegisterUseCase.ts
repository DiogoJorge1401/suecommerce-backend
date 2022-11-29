/* eslint-disable @typescript-eslint/no-unused-vars */
import { IUserModel } from '@/models/User';
import { hashPassword } from '@/utils/hashPassword';
import { AppError } from '@/errors/AppError';

interface RegisterProps {
  username: string;
  email: string;
  password: string;
}

export class RegisterUseCase {
  constructor(private userModel: IUserModel) {}

  async execute({ email, password, username }: RegisterProps) {
    if (!email || !password || !username) throw new AppError('Missing Fields!');

    const userAlreadyExists = await this.userModel.findOne({
      $or: [{ email }, { username }],
    });

    if (userAlreadyExists) throw new AppError('User already exists!');

    const hashedPassword = await hashPassword(password);

    const user = await this.userModel.create({
      email,
      password: hashedPassword,
      username,
    });

    const { password: a, ...rest } = user.toObject();

    return rest;
  }
}
