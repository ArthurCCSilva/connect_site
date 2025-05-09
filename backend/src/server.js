// src/server.js

import app from './app.js'; // 👈 Adicione .js aqui
import { config } from 'dotenv';

const PORT = config().parsed.PORT;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});