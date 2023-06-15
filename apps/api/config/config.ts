['NODE_ENV', 'PORT', 'DATABASE_URL', 'JWT_SECRET'].forEach((name) => {
  if (!process.env[name]) {
    throw new Error(`Environment variable ${name} is missing`);
  }
});

export const config = {
  env: process.env.NODE_ENV,
  port: Number(process.env.PORT) || 3333,
  databaseUrl: process.env.DATABASE_URL,
  jwtSecret: process.env.JWT_SECRET,
};
