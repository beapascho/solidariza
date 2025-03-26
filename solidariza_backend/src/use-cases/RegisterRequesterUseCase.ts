import bcrypt from "bcryptjs";
import { RequesterRepository } from "../repositories/RequesterRepository";

export class RegisterRequesterUseCase {
  private requesterRepository = new RequesterRepository();

  async execute(data: {
    name: string;
    cnpj: string;
    email: string;
    password: string;
})
  {
    const cnpjStr = data.cnpj.padStart(14, "0");

    const requesterExists = await this.requesterRepository.findByEmail(data.email);
    if (requesterExists) throw new Error("Solicitante já cadastrado com este e-mail");

    const requesterCnpjExists = await this.requesterRepository.findByCNPJ(data.cnpj);
    if (requesterCnpjExists) throw new Error("CNPJ já cadastrado");

    const hashedPassword = await bcrypt.hash(data.password, 10);

    return await this.requesterRepository.create({
      ...data,
      password: hashedPassword,
    });
  }
}
