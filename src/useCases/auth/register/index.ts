import { UserModel } from '@/models/User';
import { RegisterController } from './RegisterController';
import { RegisterUseCase } from './RegisterUseCase';

const registerUseCase = new RegisterUseCase(UserModel);
export const registerController = new RegisterController(registerUseCase);
