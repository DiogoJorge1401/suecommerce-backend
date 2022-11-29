import { NextFunction, Request, Response } from 'express';
import { AppError } from '@/errors/AppError';

export const verifyAuthorization = async (req: Request, res: Response, next: NextFunction) => {
  if (req.user.id !== req.params.id && !req.user.isAdmin)
    throw new AppError('Not Authorized!', 403);
  next();
};
