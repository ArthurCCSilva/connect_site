import jwt from 'jsonwebtoken';
import { config } from 'dotenv';

const JWT_SECRET = config().parsed.JWT_SECRET;

const generateToken = (userId) => {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: '1h' });
};

export default generateToken;