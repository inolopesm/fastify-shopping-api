import { FastifyInstance } from "fastify";
import { accountController } from "./account.controller.js";
import { createAccountDto } from "./create-account.dto.js";

export async function accountRouter(instance: FastifyInstance) {
  instance.get("/", accountController.read);

  instance.post(
    "/",
    { schema: { body: createAccountDto } },
    accountController.create
  );
}
