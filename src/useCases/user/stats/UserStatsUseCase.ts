import { IUserModel } from '@/models/User';

export class UserStatsUseCase {
  constructor(private userModel: IUserModel) {}

  async execute() {
    const date = new Date();

    const lastYear = new Date(date.getFullYear() - 1);

    const data = await this.userModel.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      {
        $project: {
          month: { $month: '$createdAt' },
        },
      },
      {
        $group: {
          _id: '$month',
          total: { $sum: 1 },
        },
      },
    ]);

    return data;
  }
}
