import { isAdmin } from '@/middlewares/isAdmin';
import { verifyAuthorization } from '@/middlewares/verifyAuthorization';
import { verifyToken } from '@/middlewares/verifyToken';
import { deleteUserController } from '@/useCases/user/delete';
import { getUserController } from '@/useCases/user/get';
import { getAllUserController } from '@/useCases/user/getAll';
import { userStatsController } from '@/useCases/user/stats';
import { updateUserController } from '@/useCases/user/update';
import { Router } from 'express';

const userRouter = Router();

userRouter.get('/', verifyToken, isAdmin, getAllUserController.handle);

userRouter.get('/stats', verifyToken, isAdmin, userStatsController.handle);

userRouter.get('/:id', verifyToken, verifyAuthorization, getUserController.handle);

userRouter.put('/:id', verifyToken, verifyAuthorization, updateUserController.handle);

userRouter.delete('/:id', verifyToken, verifyAuthorization, deleteUserController.handle);

export { userRouter };
