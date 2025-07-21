import { ISolicitationRepository } from "@/contracts/ISolicitationRepository";
import { Solicitation } from "@/entities/Solicitation";

export class CreateSolicitationUseCase {
  constructor(private repository: ISolicitationRepository) {}

  async execute(data: Solicitation): Promise<Solicitation> {
    const solicitation = new Solicitation(
      data.id,
      data.cliente,
      data.produto,
      data.quantidade
    );
    return this.repository.createSolicitation(solicitation);
  }
}
