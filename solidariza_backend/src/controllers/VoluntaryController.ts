import { Request, Response } from "express";
import { RegisterVoluntaryUseCase } from "../use-cases/RegisterVoluntaryUseCase";
import { EventRepository } from "../repositories/EventRepository";


export class VoluntaryController {
    static async register(req: Request, res: Response) {
        try {
            const { name, email, password, cpf, contact_number, birth_date, cep } = req.body;
            const voluntaryCase = new RegisterVoluntaryUseCase();
            const voluntary = await voluntaryCase.execute(name, email, password, cpf, contact_number, birth_date, cep);
            res.status(201).json(voluntary);
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({ error: error.message });
            } else {
                res.status(400).json({ èrror: "Ocorreu um erro desconhecido " });
            }
        }
    }

    static async getAllEvents(req: Request, res: Response) {
        try {
            const { categoria } = req.body; // <= aqui é o que precisa mudar

            const eventRepo = new EventRepository();
            const eventos = await eventRepo.findByCategoriaVoluntary(categoria);

            res.status(200).json(eventos);
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({ error: error.message });
            } else {
                res.status(400).json({ error: "Ocorreu um erro ao buscar eventos" });
            }
        }
    }
}