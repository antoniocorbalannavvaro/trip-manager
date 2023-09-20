import { config } from "dotenv";

config();

export const DB = {
  user: process.env.USER,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: process.env.PORT,
  database: process.env.DATABASE,
};

export const API = {
  port: process.env.API_PORT,
  host: process.env.API_HOST,
};
