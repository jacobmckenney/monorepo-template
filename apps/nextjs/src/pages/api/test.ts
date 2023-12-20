import { test } from "@abide/shared";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    test();
    res.status(200).json({ name: "John Doe" });
}
