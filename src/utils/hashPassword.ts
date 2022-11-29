import { hash } from 'bcrypt';

export const hashPassword = (p: string) => {
  return hash(p, 12);
};
