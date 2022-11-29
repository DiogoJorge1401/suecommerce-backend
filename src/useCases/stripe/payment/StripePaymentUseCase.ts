import Stripe from 'stripe';
import { AppError } from '@/errors/AppError';

interface StripePaymentProps {
  tokenId: string;
  amount: number;
}

export class StripePaymentUseCase {
  constructor(private stripe: Stripe) {}

  async execute({ tokenId, amount }: StripePaymentProps) {
    if (!tokenId) throw new AppError('Missing Fields!');

    const result = await this.stripe.charges.create({
      source: tokenId,
      amount,
      currency: 'usd',
    });

    return result;
  }
}
