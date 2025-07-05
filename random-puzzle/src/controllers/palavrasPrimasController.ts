import { FastifyReply, FastifyRequest } from "fastify";
/**
 * @file palavrasPrimasController.ts
 * @description Controlador para verificar se uma palavra é prima com base na soma dos valores das letras.
 * @requires fastify
Um número primo é um número que possui somente dois divisores: ele mesmo e o número 1. Exemplos de números primos são: 1, 2, 3, 5, 17, 101 e 10007.

Neste problema você deve ler um conjunto de palavras, onde cada palavra é composta somente por letras no intervalo a-z e A-Z. Cada letra possui um valor específico, a letra a vale 1, a letra b vale 2 e assim por diante, até a letra z, que vale 26. Do mesmo modo, a letra A vale 27, a letra B vale 28 e a letra Z vale 52.

Você deve escrever um programa para determinar se uma palavra é uma palavra prima ou não. Uma palavra é uma palavra prima se a soma de suas letras é um número primo.

Tabela ASCII:
    *   - a: 97, b: 98, ..., z: 122
    *   - A: 65, B: 66, ..., Z: 90
 */

class PalavrasPrimasController {
  async post(
    request: FastifyRequest<{
      Body: { palavra: string };
    }>,
    reply: FastifyReply
  ) {
    const { palavra } = request.body;

    if (!palavra || typeof palavra !== "string") {
      return reply.status(400).send({ error: "Palavra inválida" });
    }

    const valorLetra = (letra: string): number => {
      const codigo = letra.charCodeAt(0);
      if (codigo >= 97 && codigo <= 122) {
        return codigo - 96;
      } else if (codigo >= 65 && codigo <= 90) {
        return codigo - 38;
      }
      return 0;
    };

    const soma = Array.from(palavra).reduce(
      (acc, letra) => acc + valorLetra(letra),
      0
    );

    const isPrimo = (num: number): boolean => {
      if (num <= 1) return false;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
      }
      return true;
    };

    const resultado = isPrimo(soma);
    return reply.send({ palavra, soma, resultado });
  }
}

export const palavrasPrimasController = new PalavrasPrimasController();
