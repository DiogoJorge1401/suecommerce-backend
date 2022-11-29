import { UserModel } from '@/models/User';
import { LoginController } from './LoginController';
import { LoginUseCase } from './LoginUseCase';

const loginUseCase = new LoginUseCase(UserModel);
export const loginController = new LoginController(loginUseCase);
