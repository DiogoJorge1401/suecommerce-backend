import { NextFunction, Request, Response } from 'express';
import { AppError } from '@/errors/AppError';

export const handleError = (
  err: AppError | Error,
  req: Request,
  res: Response,
  _: NextFunction,
) => {
  if (err instanceof AppError) return res.status(err.statusCode).json({ message: err.message });
  return res.status(500).json({ message: err.message });
};
