import { Router } from 'express';
import { verifyToken } from '@/middlewares/verifyToken';
import { stripePaymentController } from '@/useCases/stripe/payment';

const stripeRouter = Router();

stripeRouter.post('/payment', verifyToken, stripePaymentController.handle);

export { stripeRouter };
