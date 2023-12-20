import { drizzle as drizzleInit } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { user } from "./schema";

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    max: 2,
});
export const drizzle = drizzleInit(pool);

export const Tables = {
    User: user,
};
