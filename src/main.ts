import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import dotenv from "dotenv";
import env from "env-var";
import Fastify from "fastify";
import fastifyAutoLoad from "@fastify/autoload";
import fastifyMongo from "@fastify/mongodb";

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

dotenv.config();

const PORT = env.get("PORT").default("3000").asPortNumber();
const MONGO_URL = env.get("MONGO_URL").required().asUrlString();

const fastify = Fastify({ logger: true });

fastify.register(fastifyMongo, { url: MONGO_URL });

fastify.register(fastifyAutoLoad, { dir: join(__dirname, "modules") });

fastify.listen({ port: PORT });
