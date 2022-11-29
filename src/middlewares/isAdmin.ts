import { NextFunction, Request, Response } from 'express';
import { AppError } from '@/errors/AppError';

export const isAdmin = async (req: Request, res: Response, next: NextFunction) => {
  const { isAdmin } = req.user;

  if (!isAdmin) throw new AppError('Not Authorized!', 403);

  next();
};
