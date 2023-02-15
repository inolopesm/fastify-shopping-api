import env from "env-var";
import Fastify from "fastify";

const PORT = env.get("PORT").default("3000").asPortNumber();

const fastify = Fastify({ logger: true });

fastify.get("/accounts", async function () {
  return [
    { id: 1, username: "user_one" },
    { id: 2, username: "user_two" },
    { id: 3, username: "user_three" },
  ];
});

fastify.get("/products", async function () {
  return [
    { id: 1, name: "product_one" },
    { id: 2, name: "product_two" },
    { id: 3, name: "product_three" },
  ];
});

fastify.listen({ port: PORT });
