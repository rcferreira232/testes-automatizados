import { FastifyReply, FastifyRequest } from "fastify";
import { makeCreateSolicitation } from "@/infra/factories/makeCreateSolicitation";

export class SolicitationController {
  async create(request: FastifyRequest, reply: FastifyReply) {
    const { id, cliente, produto, quantidade } = request.body as {
      id: number;
      cliente: string;
      produto: string;
      quantidade: number;
    };

    const useCase = makeCreateSolicitation();
    const result = await useCase.execute({ id, cliente, produto, quantidade });

    return reply.code(201).send(result);
  }
}
