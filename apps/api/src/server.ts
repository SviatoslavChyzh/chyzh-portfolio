import 'dotenv/config';
import express, { Application } from 'express';
import swaggerUi from 'swagger-ui-express';

import { config } from './config/config';
import AuthRouter from './routes/auth.router';
import { errorHandler, notFound } from './middleware/error.middleware';
import * as process from 'process';

const PORT = process.env.PORT || 3333; //config.port;
const JWT_SECRET = config.jwtSecret;

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get('/', (req, res) => {
//   res.send({ message: 'Hello World!' });
// });

app.use('/api/auth', AuthRouter);

// app.use('/api/auth/login', authRouter);

app.use(
  '/docs',
  swaggerUi.serve,
  swaggerUi.setup(undefined, {
    swaggerOptions: {
      url: '/swagger.json',
    },
  })
);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`🚀  Server ready at http://localhost:${PORT}`);
});

// --------------------------------------------------------
// - **POST /api/auth/login** - Login with username and password
// - **POST /api/auth/register** - Register a new user
// - **POST /api/auth/logout** - Logout a user
