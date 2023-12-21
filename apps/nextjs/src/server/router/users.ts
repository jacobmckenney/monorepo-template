import { z } from "zod";
import { t } from "../trpc";
export const usersRouter = t.router({
    list: t.procedure.input(z.object({})).query(async ({ ctx: { tables, db } }) => {
        const users = await db.select().from(tables.user);
        return {
            users,
        };
    }),
    create: t.procedure
        .input(z.object({ email: z.string().email() }))
        .mutation(async ({ ctx: { tables, db }, input }) => {
            console.log("input", input);
            const user = await db.insert(tables.user).values({ email: input.email }).returning();
            return { user };
        }),
});
