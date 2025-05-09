import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config(); // Garante que as variáveis estejam carregadas

const JWT_SECRET = process.env.JWT_SECRET;

const generateToken = (userId) => {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: '1h' });
};

export default generateToken;