import { CreateSolicitationUseCase } from "@/usecase/CreateSolicitationUseCase";
import { SolicitationRepository } from "@/repositories/SolicitationRepository";

export function makeCreateSolicitation() {
  const repository = new SolicitationRepository();
  const useCase = new CreateSolicitationUseCase(repository);
  return useCase;
}
