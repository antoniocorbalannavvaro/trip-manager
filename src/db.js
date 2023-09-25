import Debug from "debug";
const debug = Debug("app:database");
import pg from "pg";
import bluebird from "bluebird";
import { DB } from "./config.js";

const { Pool } = pg;

/*
 * XXX: for debugging, remember to set BLUEBIRD_LONG_STACK_TRACES=1
 */
const pool = new Pool({
  Promise: bluebird,
  user: DB.user,
  password: DB.password,
  host: DB.host,
  port: DB.port,
  database: DB.database,
});

debug("DATABASE STARTED");
export default pool;
