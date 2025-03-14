import pkg from "pg";
import dotenv from "dotenv";

dotenv.config(); // <-- Loads variables from .env
const { Pool } = pkg;

// Create a new Pool using environment variables
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT, // Typically 5432
  ssl: { rejectUnauthorized: false },
});

export async function queryDatabase(query, params) {
  const client = await pool.connect();
  try {
    const result = await client.query(query, params);
    return result;
  } finally {
    client.release();
  }
}
