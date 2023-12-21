import type { Config } from "drizzle-kit";
export default {
    schema: "./src/schema.ts",
    out: "./migrations",
    driver: "pg",
    dbCredentials: {
        connectionString: process.env.DATABASE_URL as string,
    },
} satisfies Config;
