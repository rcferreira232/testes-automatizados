import { FastifyInstance } from "fastify";

export async function solicitationRoutes(app: FastifyInstance) {
  app.get("/", async () => {
    return { message: "Solicitation API is running" };
  });
}
