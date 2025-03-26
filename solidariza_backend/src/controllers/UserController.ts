import { Request, Response } from "express";
import { GetAllUsersUseCase } from "../use-cases/GetAllUsersUseCase";

export class UserController {
  static async getAllUsers(req: Request, res: Response) {
    try {
      const useCase = new GetAllUsersUseCase();
      const users = await useCase.execute();
      res.json(users);
    } catch (error) {
      if (error instanceof Error) {
          res.status(400).json({ error: error.message });
      } else {
          res.status(400).json({ error: "Ocorreu um erro desconhecido." });
      }
  }
  
  }
}
