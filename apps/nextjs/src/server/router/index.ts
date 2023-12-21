import { t } from "../trpc";
import { usersRouter } from "./users";

export const appRouter = t.router({
    users: usersRouter,
});

export type AppRouter = typeof appRouter;
