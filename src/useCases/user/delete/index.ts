import { UserModel } from '@/models/User';
import { DeleteUserController } from './DeleteUserController';
import { DeleteUserUseCase } from './DeleteUserUseCase';

const deleteUserUseCase = new DeleteUserUseCase(UserModel);
export const deleteUserController = new DeleteUserController(deleteUserUseCase);
