import { initTRPC } from "@trpc/server";
import { Context } from "~/pages/api/trpc/[trpc]";

export const t = initTRPC.context<Context>().create();
