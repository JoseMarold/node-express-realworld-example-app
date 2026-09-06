declare namespace Express {
  export interface Request {
    auth?: {
      user?: {
        role: string;
        id?: number;
        role?: 'USER' | 'ADMIN'
      };
    };
  }
}
