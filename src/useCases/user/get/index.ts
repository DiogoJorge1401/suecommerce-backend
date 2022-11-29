import { UserModel } from '@/models/User';
import { GetUserController } from './GetUserController';
import { GetUserUseCase } from './GetUserUseCase';

const getUserUseCase = new GetUserUseCase(UserModel);
export const getUserController = new GetUserController(getUserUseCase);
