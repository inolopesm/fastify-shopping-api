import env from "env-var";
import Fastify from "fastify";
import { accountPlugin } from "./modules/account/account.plugin.js";
import { productPlugin } from "./modules/product/product.plugin.js";

const PORT = env.get("PORT").default("3000").asPortNumber();

const fastify = Fastify({ logger: true });

fastify.register(accountPlugin);
fastify.register(productPlugin);

fastify.listen({ port: PORT });
