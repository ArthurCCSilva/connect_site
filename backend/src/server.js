// src/server.js

import app from './app.js';
import { config } from 'dotenv';

const PORT = config().parsed.PORT;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});