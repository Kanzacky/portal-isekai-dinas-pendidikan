import "dotenv/config";
import { Sequelize } from "sequelize";

// const connection = new Sequelize({
//   database: process.env.DB_DATABASE || "",
//   port: process.env.DB_PORT || "3306",
//   username: process.env.DB_USERNAME || "root",
//   password: process.env.DB_PASSWORD || "",
//   host: process.env.DB_HOST || "localhost",
//   dialect: process.env.DB_DBMS || "mysql",
//   timezone: "+07:00",
//   logging: false,
// });

// try {
//   await connection.authenticate();
//   console.log("Database connected");
// } catch (err) {
//   console.error(err.message);
// }

// export default connection;

export const createConnection = (config = {}) => {
  const {
    database = process.env.DB_DATABASE || "",
    username = process.env.DB_USERNAME || "root",
    password = process.env.DB_PASSWORD || "",
    host = process.env.DB_HOST || "localhost",
    dialect = process.env.DB_DBMS || "mysql",
    port = process.env.DB_PORT || "3306",
    timezone = "+07:00",
    logging = false,
  } = config;

  const connection = new Sequelize({
    database,
    username,
    password,
    host,
    dialect,
    port,
    timezone,
    logging,
  });

  return connection;
};

const connection = createConnection();

try {
  await connection.authenticate();
  console.log("Database connected");
} catch (err) {
  console.error("Database connection error:", err.message);
}

export default connection;
