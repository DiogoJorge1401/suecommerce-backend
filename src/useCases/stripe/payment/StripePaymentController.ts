import { Request, Response } from 'express';
import { StripePaymentUseCase } from './StripePaymentUseCase';

export class StripePaymentController {
  constructor(private stripePaymentUseCase: StripePaymentUseCase) {}

  handle = async (req: Request, res: Response) => {
    const { tokenId, amount } = req.body;

    const result = await this.stripePaymentUseCase.execute({ tokenId, amount });

    res.json(result);
  };
}
