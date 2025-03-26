import { Requester } from "../models/Requester";

export class RequesterRepository {
  async create(requesterData: Partial<Requester>): Promise<Requester> {
    return await Requester.create(requesterData);
  }

  async findByEmail(email: string): Promise<Requester | null> {
    return await Requester.findOne({ where: { email } });
  }

  async findByCNPJ(cnpj: string): Promise<Requester | null> {
    return await Requester.findOne({ where: { cnpj } });
  }

  async findAll(): Promise<Requester[]> {
    return await Requester.findAll();
  }
}
