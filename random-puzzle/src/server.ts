import Fastify from "fastify";
import cors from "@fastify/cors";
import { routes } from "./routes";
import { env } from "../env";

const app = Fastify({ logger: true });

const start = async () => {
  await app.register(cors);
  await app.register(routes);

  try {
    await app.listen({ port: env.port });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
