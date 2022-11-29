import { UserModel } from '@/models/User';
import { UpdateUserController } from './UpdateUserController';
import { UpdateUserUseCase } from './UpdateUserUseCase';

const updateUserUseCase = new UpdateUserUseCase(UserModel);
export const updateUserController = new UpdateUserController(updateUserUseCase);
