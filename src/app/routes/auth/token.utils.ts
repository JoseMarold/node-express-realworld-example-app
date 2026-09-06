import * as jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET;

if (!secret) {
  throw new Error('JWT_SECRET not configured');
}

const generateToken = (
  id: number,
  role: 'USER' | 'ADMIN'
): string =>
  jwt.sign(
    { user: { id, role } },
    secret,
    {
      algorithm: 'HS256',
      expiresIn: '15m',
    }
  );

export default generateToken;
