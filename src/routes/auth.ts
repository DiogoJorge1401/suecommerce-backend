import { Router } from 'express';
import { loginController } from '@/useCases/auth/login';
import { registerController } from '@/useCases/auth/register';

const authRouter = Router();

authRouter.post('/login', loginController.handle);

authRouter.post('/register', registerController.handle);

export { authRouter };
