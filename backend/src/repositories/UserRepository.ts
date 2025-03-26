import { User } from "../models/User";

export class UserRepository {
  async create(userData: Partial<User>): Promise<User> {
    return await User.create(userData);
  }

  async findByEmail(email: string): Promise<User | null> {
    return await User.findOne({ where: { email } });
  }

  async findAll(): Promise<User[]> {
    return await User.findAll();
  }
}
