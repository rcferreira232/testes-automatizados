import { FastifyInstance } from "fastify";
import { palavrasPrimasController } from "./controllers/index";

export async function routes(fastify: FastifyInstance) {
  fastify.get("/", async () => {
    return { message: `Random Puzzle API is running` };
  });

  fastify.post("/palavras-primas", palavrasPrimasController.post);
}
