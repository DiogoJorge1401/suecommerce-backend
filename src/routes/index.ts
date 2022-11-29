import { Router } from 'express';
import { authRouter } from './auth';
import { cartRouter } from './cart';
import { orderRouter } from './order';
import { productRouter } from './product';
import { stripeRouter } from './stripe';
import { userRouter } from './user';

const routes = Router();

routes.use('/users', userRouter);

routes.use('/auth', authRouter);

routes.use('/orders', orderRouter);

routes.use('/products', productRouter);

routes.use('/carts', cartRouter);

routes.use('/stripe', stripeRouter);

export { routes };
