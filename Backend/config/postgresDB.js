import pkg from "pg";
import dotenv from "dotenv";
dotenv.config();
const { Client } = pkg;

const dbConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
};

export const client = new Client(dbConfig);
