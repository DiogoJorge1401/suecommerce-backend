import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { UserModel } from '@/models/User';
import { TokenPayload } from '@/dtos/TokenPayload';

export const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) return res.status(401).json({ message: 'Token Is Missing!' });

  try {
    const JWT_SECRET = process.env.JWT_SECRET as string;

    const result = verify(token, JWT_SECRET) as TokenPayload;

    const user = await UserModel.findById(result.id);

    if (!user) res.status(403).json({ message: "User doesn't exist" });

    req.user = result;

    return next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid Token!' });
  }
};
