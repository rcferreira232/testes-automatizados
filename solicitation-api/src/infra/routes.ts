import { FastifyInstance } from "fastify";

export async function routes(fastify: FastifyInstance) {
  fastify.get("/", async () => {
    return { message: "Server is running" };
  });
}
