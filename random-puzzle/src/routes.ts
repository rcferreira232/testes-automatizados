import { FastifyInstance, FastifyPluginOptions } from "fastify";

export async function routes(
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) {
  fastify.get("/", async () => {
    return { message: `Random Puzzle API is running` };
  });
}
