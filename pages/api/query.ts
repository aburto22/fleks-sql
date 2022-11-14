import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";
import { stringify } from "superjson";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { query }: { query: string } = req.body;

    try {
      const data = await prisma.$queryRawUnsafe(query);

      return res.status(200).send(stringify({ status: "success", data }));
    } catch (err) {
      console.log(err);
      const message = "There was an error with your query";
      return res.status(400).send(stringify({ status: "error", message }));
    }
  }

  return res.json(null);
}
