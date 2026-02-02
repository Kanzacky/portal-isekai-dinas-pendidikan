import { config } from "dotenv";
config();

const getConnectionConfig = () => {
  const dbms = process.env.DB_DBMS || "mysql";

  const baseConfig = {
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || (dbms === "pg" ? 5432 : 3306),
    user: process.env.DB_USERNAME || "",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_DATABASE || "",
  };

  if (dbms === "pg" || dbms === "postgresql") {
    return {
      ...baseConfig,
      ssl: process.env.NODE_ENV === "production" ? { rejectUnauthorized: false } : false
    };
  }

  return baseConfig;
};

const knexConfig = {
  development: {
    client: process.env.DB_DBMS || "mysql",
    connection: getConnectionConfig(),
    migrations: {
      directory: "./migrations",
      extension: "js",
    },
    seeds: {
      directory: "./seeds",
    },
    // PostgreSQL specific pool settings
    pool: process.env.DB_DBMS === "pg" ? {
      min: 2,
      max: 10,
      idleTimeoutMillis: 30000,
    } : undefined
  },
  production: {
    client: process.env.DB_DBMS || "mysql",
    connection: getConnectionConfig(),
    migrations: {
      directory: "./migrations",
      extension: "js",
    },
    seeds: {
      directory: "./seeds",
    },
    pool: process.env.DB_DBMS === "pg" ? {
      min: 2,
      max: 10,
      idleTimeoutMillis: 30000,
    } : undefined
  },
};

export default knexConfig;
