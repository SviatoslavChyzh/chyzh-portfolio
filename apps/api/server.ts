import 'dotenv/config';
import express, { Application } from 'express';

import { config } from './config/config.js';

const PORT = config.port;
const JWT_SECRET = config.jwtSecret;

const app: Application = express();

app.get('/', (req, res) => {
  res.send({ message: 'Hello World!1123' });
});

app.listen(PORT, () => {
  console.log(`🚀  Server ready at http://localhost:${PORT}`);
});
