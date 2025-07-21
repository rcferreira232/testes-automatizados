import { FastifyInstance } from "fastify";
import { SolicitationController } from "@/controller/SolicitationController";

export async function solicitationRoutes(app: FastifyInstance) {
  const controller = new SolicitationController();

  app.get("/", async () => {
    return { message: "Solicitation API is running" };
  });

  app.post("/solicitations", (request, reply) => {
    return controller.create(request, reply);
  });
}
