import { AppError } from '@/errors/AppError';
import { IUserModel } from '@/models/User';

interface GetUserProps {
  getUserId: string;
}

export class GetUserUseCase {
  constructor(private userModel: IUserModel) {}

  async execute({ getUserId }: GetUserProps) {
    const user = await this.userModel.findById(getUserId, { password: false, __v: false });

    if (!user) throw new AppError("User doesn't exist");

    return user;
  }
}
