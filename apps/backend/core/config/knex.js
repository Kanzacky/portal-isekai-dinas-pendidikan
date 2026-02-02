import knex from "knex";
import knexConfig from "../../knexfile.js";
import { config } from "dotenv";

config();

class Database {
  constructor(env = process.env.NODE_ENV || "development") {
    this.connections = {};
    this.defaultEnv = env;
    this.current = this._connect(env);
  }

  _connect(name) {
    if (!this.connections[name]) {
      const db = knex(knexConfig[name]);
      const dbms = process.env.DB_DBMS || "mysql";
      if (dbms === "mysql") {
        db.raw("SET time_zone = '+07:00'").catch(() => { });
      } else if (dbms === "pg") {
        db.raw("SET TIME ZONE 'Asia/Jakarta'").catch(() => { });
      }
      this.connections[name] = db;
    }
    return this.connections[name];
  }

  connection(name) {
    this.current = this._connect(name);
    return this.current;
  }

  table(name) {
    return this.current.table(name);
  }
}

function createDB(env) {
  const dbInstance = new Database(env);

  function db(table) {
    return dbInstance.table(table);
  }

  db.connection = dbInstance.connection.bind(dbInstance);
  db.table = dbInstance.table.bind(dbInstance);

  return new Proxy(db, {
    get(target, prop) {
      if (prop in target) return target[prop];
      return dbInstance.current[prop];
    },
  });
}

const DB = createDB();
export default DB;
