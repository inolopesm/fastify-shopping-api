import fastifyPlugin from "fastify-plugin";
import { accountRouter } from "./account.router.js";

export const accountPlugin = fastifyPlugin(async function (instance) {
  instance.register(accountRouter, { prefix: "/accounts" });
});
