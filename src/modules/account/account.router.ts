import { FastifyInstance } from "fastify";
import { accountController } from "./account.controller.js";

export async function accountRouter(instance: FastifyInstance) {
  instance.get("/", accountController.read);
}
