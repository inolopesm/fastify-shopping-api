import dotenv from "dotenv";
import env from "env-var";
import Fastify from "fastify";
import fastifyMongo from "@fastify/mongodb";
import { accountPlugin } from "./modules/account/account.plugin.js";
import { productPlugin } from "./modules/product/product.plugin.js";

dotenv.config();

const PORT = env.get("PORT").default("3000").asPortNumber();
const MONGO_URL = env.get("MONGO_URL").required().asUrlString();

const fastify = Fastify({ logger: true });

fastify.register(fastifyMongo, { url: MONGO_URL });

fastify.register(accountPlugin);
fastify.register(productPlugin);

fastify.listen({ port: PORT });
