import pg from "pg";
import { DB } from "./config.js";

const { Pool } = pg;

const pool = new Pool({
  user: DB.user,
  password: DB.password,
  host: DB.host,
  port: DB.port,
  database: DB.database,
});

export default pool;
