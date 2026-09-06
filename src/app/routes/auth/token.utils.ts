import * as jwt from 'jsonwebtoken';

const generateToken = (id: number, role: 'USER' | 'ADMIN'): string =>
  jwt.sign({ user: { id, role} }, process.env.JWT_SECRET || 'superSecret');

export default generateToken;
