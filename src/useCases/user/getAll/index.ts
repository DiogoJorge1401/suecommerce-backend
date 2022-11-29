import { UserModel } from '@/models/User';
import { GetAllUsersController } from './GetAllUsersController';
import { GetAllUsersUseCase } from './GetAllUsersUseCase';

const getAllUserUseCase = new GetAllUsersUseCase(UserModel);
export const getAllUserController = new GetAllUsersController(getAllUserUseCase);
