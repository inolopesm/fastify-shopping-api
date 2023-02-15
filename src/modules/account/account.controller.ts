import { FastifyInstance, FastifyRequest } from "fastify";
import type { AccountDocument } from "./account.document.js";
import { CreateAccountDto } from "./create-account.dto.js";

export const accountController = {
  async read(this: FastifyInstance) {
    const collection = this.mongo.db?.collection<AccountDocument>("account");
    return await collection?.find().toArray();
  },

  async create(
    this: FastifyInstance,
    request: FastifyRequest<{ Body: CreateAccountDto }>
  ) {
    const collection = this.mongo.db?.collection<AccountDocument>("account");
    await collection?.insertOne(request.body);
  },
};
