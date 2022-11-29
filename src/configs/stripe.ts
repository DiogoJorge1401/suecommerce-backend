import Stripe from 'stripe';

const STRIPE_KEY = process.env.STRIPE_KEY as string;

export const stripe = new Stripe(STRIPE_KEY, {
  apiVersion: '2022-08-01',
});
