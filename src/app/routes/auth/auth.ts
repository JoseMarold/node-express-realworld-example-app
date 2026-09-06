import { expressjwt as jwt } from 'express-jwt';
import * as express from 'express';
import jsonwebtoken from 'jsonwebtoken';

const getTokenFromHeaders = (req: express.Request): string | null => {
  if (
    (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Token') ||
    (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer')
  ) {
    return req.headers.authorization.split(' ')[1];
  }
  return null;
};

const vRequired = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const token = getTokenFromHeaders(req);

  if (!token) {
    return res.status(401).json({
      message: 'Token requerido',
    });
  }

  const decoded = jsonwebtoken.decode(token);
  console.log(decoded);

  if (!decoded) {
    return res.status(401).json({
      message: 'Token inválido',
    });
  }
  (req as any).auth = decoded;

  next();
};


const auth = {
  required: vRequired,
  optional: jwt({
    secret: process.env.JWT_SECRET || 'superSecret',
    credentialsRequired: false,
    getToken: getTokenFromHeaders,
    algorithms: ['HS256'],
  }),
};

export default auth;
