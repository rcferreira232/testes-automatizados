import { Solicitation } from "@/entities/Solicitation";

export interface ISolicitationRepository {
  createSolicitation(solicitation: Solicitation): Promise<Solicitation>;
}
