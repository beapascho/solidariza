import { Request, Response } from "express";
import { RegisterUserUseCase } from "../use-cases/RegisterUserUseCase";
import { AuthenticateUserUseCase } from "../use-cases/AuthenticateUserUseCase";

export class AuthController {
  static async register(req: Request, res: Response) {
    try {
      const { name, email, password } = req.body;
      const useCase = new RegisterUserUseCase();
      const user = await useCase.execute(name, email, password);
      res.status(201).json(user);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message });
      } else {
        res.status(400).json({ error: "Ocorreu um erro desconhecido." });
      }
    }
  }

  static async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const useCase = new AuthenticateUserUseCase();
      const { user, token } = await useCase.execute(email, password);
      res.json({ user, token });
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message });
      } else {
        res.status(400).json({ error: "Ocorreu um erro desconhecido." });
      }
    }
  }
}
