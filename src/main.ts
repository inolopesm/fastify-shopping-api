import env from "env-var";
import Fastify from "fastify";

const PORT = env.get("PORT").default("3000").asPortNumber();

const fastify = Fastify({ logger: true });

fastify.listen({ port: PORT });
