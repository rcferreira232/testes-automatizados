import { ISolicitationRepository } from "@/contracts/ISolicitationRepository";
import { Solicitation } from "@/entities/Solicitation";

export class SolicitationRepository implements ISolicitationRepository {
  private solicitations: Solicitation[] = [];

  async createSolicitation(solicitation: Solicitation): Promise<Solicitation> {
    this.solicitations.push(solicitation);
    return solicitation;
  }
}
