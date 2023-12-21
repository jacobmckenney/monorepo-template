import { drizzle, tables } from "@abide/db";
import { inferAsyncReturnType } from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";
import { appRouter } from "~/server/router";

const createContext = ({ req, res }: trpcNext.CreateNextContextOptions) => {
    return {
        req,
        res,
        db: drizzle,
        tables,
    };
};
export type Context = inferAsyncReturnType<typeof createContext>;

export default trpcNext.createNextApiHandler({
    router: appRouter,
    createContext,
});
