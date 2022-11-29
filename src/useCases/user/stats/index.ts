import { UserModel } from '@/models/User';
import { UserStatsController } from './UserStatsController';
import { UserStatsUseCase } from './UserStatsUseCase';

const userStatsUseCase = new UserStatsUseCase(UserModel);
export const userStatsController = new UserStatsController(userStatsUseCase);
