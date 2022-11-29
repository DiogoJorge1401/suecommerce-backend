import { AppError } from '@/errors/AppError';
import { IUserModel } from '@/models/User';

interface DeleteUserProps {
  deleteUserId: string;
}

export class DeleteUserUseCase {
  constructor(private userModel: IUserModel) {}

  async execute({ deleteUserId }: DeleteUserProps) {
    const user = await this.userModel.findById(deleteUserId);

    if (!user) throw new AppError("User doesn't exist");

    await user.deleteOne();
  }
}
