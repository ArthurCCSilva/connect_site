// src/routes/authRoutes.js

import express from 'express';
import { register, login, getAllUsers } from '../controllers/authController.js'; // Importe getAllUsers

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/cadastros', getAllUsers); // Nova rota

export default router;