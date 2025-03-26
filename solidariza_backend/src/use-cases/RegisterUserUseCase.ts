import bcrypt from "bcryptjs";
import { UserRepository } from "../repositories/UserRepository";

export class RegisterUserUseCase {
  private userRepository = new UserRepository();

  async execute(name: string, email: string, password: string) {
    const userExists = await this.userRepository.findByEmail(email);
    if (userExists) throw new Error("Usuário já cadastrado.");

    const hashedPassword = await bcrypt.hash(password, 10);
    return await this.userRepository.create({ name, email, password: hashedPassword });
  }
}
