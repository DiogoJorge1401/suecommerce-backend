import { IUserModel } from '@/models/User';

export class GetAllUsersUseCase {
  constructor(private userModel: IUserModel) {}

  async execute(q?: boolean) {
    const filter = { password: false, __v: false };

    const query = this.userModel.find().select(filter);

    const users = q ? query.sort({ _id: -1 }).limit(5) : query;

    return users.exec();
  }
}
