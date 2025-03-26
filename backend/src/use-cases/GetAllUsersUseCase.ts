import { UserRepository } from "../repositories/UserRepository";

export class GetAllUsersUseCase {
  private userRepository = new UserRepository();

  async execute() {
    return await this.userRepository.findAll();
  }
}
