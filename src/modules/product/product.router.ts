import { FastifyInstance } from "fastify";
import { productController } from "./product.controller.js";

export async function productRouter(instance: FastifyInstance) {
  instance.get("/", productController.read);
}
