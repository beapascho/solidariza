import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { UserRepository } from "../repositories/UserRepository";

export class AuthenticateUserUseCase {
  private userRepository = new UserRepository();

  async execute(email: string, password: string) {
    const user = await this.userRepository.findByEmail(email);
    if (!user) throw new Error("Credenciais inválidas.");

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) throw new Error("Credenciais inválidas.");

    const token = jwt.sign(
      { id: user.id, email: user.email, cnpj: user.cnpj }, // Agora inclui o CNPJ no token
      process.env.JWT_SECRET!,
      { expiresIn: "1d" }
    );

    return {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        cnpj: user.cnpj, // Incluímos o CNPJ na resposta
      },
      token,
    };
  }
}
