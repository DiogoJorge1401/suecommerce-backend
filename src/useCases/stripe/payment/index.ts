import { stripe } from '@/configs/stripe';
import { StripePaymentController } from './StripePaymentController';
import { StripePaymentUseCase } from './StripePaymentUseCase';

const stripePaymentUseCase = new StripePaymentUseCase(stripe);
export const stripePaymentController = new StripePaymentController(stripePaymentUseCase);
