import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { stringify } from "superjson";

const regexForbiddenActions = /(?:\b|;)(?:insert|alter|delete|update)\b/gim;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { query }: { query: string } = req.body;

    try {
      if (regexForbiddenActions.test(query)) {
        throw new Error("SQL Operation not allowed.");
      }

      const data = await prisma.$queryRawUnsafe(query);

      return res.status(200).send(stringify({ status: "success", data }));
    } catch (err) {
      const message =
        err instanceof PrismaClientKnownRequestError
          ? err.meta?.message || err.message
          : err instanceof Error
          ? err.message
          : "There was an error with your query";
      return res.status(400).send(stringify({ status: "error", message }));
    }
  }

  return res.status(404).end();
}
