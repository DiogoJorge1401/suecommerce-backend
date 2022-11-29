import { UpdateUserDTO } from '@/dtos/UpdateUserDTO';
import { AppError } from '@/errors/AppError';
import { IUserModel } from '@/models/User';
import { hashPassword } from '@/utils/hashPassword';

interface UpdateUserProps {
  updateUserId: string;
  data: UpdateUserDTO;
}

export class UpdateUserUseCase {
  constructor(private userModel: IUserModel) {}

  async execute({ data, updateUserId }: UpdateUserProps) {
    if (!Object.values(data).filter(Boolean).length) throw new AppError('Fields Are Missing');

    const user = await this.userModel.findById(updateUserId);

    if (!user) throw new AppError("User doesn't exist");

    if (data.password) data.password = await hashPassword(data.password);

    return this.userModel
      .findByIdAndUpdate(updateUserId, { ...data }, { new: true })
      .select({ password: false, __v: false });
  }
}
