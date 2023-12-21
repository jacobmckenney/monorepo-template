import { drizzle as drizzleInit } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { test, user } from "./schema";

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    max: 1,
});
export const drizzle = drizzleInit(pool);

export const tables = {
    test,
    user,
};
