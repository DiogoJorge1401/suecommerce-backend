declare namespace Express {
  interface TokenPayload {
    id: string;
    isAdmin: boolean;
  }

  export interface Request {
    user: TokenPayload;
  }
}
