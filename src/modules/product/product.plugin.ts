import fastifyPlugin from "fastify-plugin";
import { productRouter } from "./product.router.js";

export const productPlugin = fastifyPlugin(async function (instance) {
  instance.register(productRouter, { prefix: "/products" });
});
