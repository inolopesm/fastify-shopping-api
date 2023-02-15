import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { AccountDocument } from "./account.document.js";
import { CreateAccountDto } from "./create-account.dto.js";

export const accountController = {
  async read(this: FastifyInstance) {
    if (!this.mongo.db) throw new Error();
    const collection = this.mongo.db.collection<AccountDocument>("account");
    return await collection.find().toArray();
  },

  async create(
    this: FastifyInstance,
    request: FastifyRequest<{ Body: CreateAccountDto }>,
    reply: FastifyReply
  ) {
    const { username } = request.body;
    if (!this.mongo.db) throw new Error();
    const collection = this.mongo.db.collection<AccountDocument>("account");
    const count = await collection.countDocuments({ username });

    if (count) {
      await reply.status(400).send({
        statusCode: 400,
        error: "Bad Request",
        message: "Username already in use",
      });

      return;
    }

    await collection?.insertOne(request.body);

    await reply.status(200).send(null);
  },
};
