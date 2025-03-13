import pkg from "pg"; // ✅ Correct way to import 'pg' in ES modules
const { Pool } = pkg;


const pool = new Pool({
    user: "yitzchok",
    host: "obscurepedia-db.c9qi6qoiyq1t.us-east-1.rds.amazonaws.com",
    database: "obscurepedia",
    password: "X4l87gDovMeSlsPWKOtJ",
    port: 5432,
    ssl: { rejectUnauthorized: false } // ✅ Ensures connection works with AWS RDS
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
