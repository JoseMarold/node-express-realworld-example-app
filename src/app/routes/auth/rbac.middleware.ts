import { Request, Response, NextFunction } from 'express';

export const requireAdmin = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.auth?.user?.role !== 'ADMIN') {
    return res.status(403).json({
      message: 'Forbidden: admin role required',
    });
  }

  next();
};