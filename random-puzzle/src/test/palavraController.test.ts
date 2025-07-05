import { palavrasPrimasController } from "../controllers";
import { FastifyReply, FastifyRequest } from "fastify";

describe("PalavrasPrimasController", () => {
  it("should return true for a prime word", async () => {
    const request = {
      body: { palavra: "abc" },
    } as FastifyRequest<{ Body: { palavra: string } }>;
    const reply = {
      send: jest.fn(),
      status: jest.fn().mockReturnThis(),
    } as unknown as FastifyReply;

    await palavrasPrimasController.post(request, reply);
    expect(reply.send).toHaveBeenCalledWith({
      palavra: "abc",
      soma: 6,
      resultado: false,
    });
  });

  it("should return false for a non-prime word", async () => {
    const request = {
      body: { palavra: "a" },
    } as unknown as FastifyRequest<{ Body: { palavra: string } }>;
    const reply = {
      send: jest.fn(),
      status: jest.fn().mockReturnThis(),
    } as unknown as FastifyReply;

    await palavrasPrimasController.post(request, reply);
    expect(reply.send).toHaveBeenCalledWith({
      palavra: "a",
      soma: 1,
      resultado: false,
    });
  });

  it("should handle invalid input", async () => {
    const request = {
      body: { palavra: "" },
    } as unknown as FastifyRequest<{ Body: { palavra: string } }>;
    const reply = {
      send: jest.fn(),
      status: jest.fn().mockReturnThis(),
    } as unknown as FastifyReply;

    await palavrasPrimasController.post(request, reply);
    expect(reply.status).toHaveBeenCalledWith(400);
    expect(reply.send).toHaveBeenCalledWith({ error: "Palavra inválida" });
  });
});
