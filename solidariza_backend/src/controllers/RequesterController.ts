// src/controllers/RequesterController.ts
import { Request, Response } from "express";
import { RegisterRequesterUseCase } from "../use-cases/RegisterRequesterUseCase";
import { RegisterNewEventRequest } from "../use-cases/RegisterNewEventRequest";
import { EventRepository } from "../repositories/EventRepository";

export class RequesterController {
    static async register(req: Request, res: Response) {
        try {
            const { name, cnpj, email, password } = req.body;
            const requesterCase = new RegisterRequesterUseCase();
            const requester = await requesterCase.execute({
                name,
                cnpj,
                email,
                password
            });
            res.status(201).json(requester);
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({ error: error.message });
            } else {
                res.status(400).json({ error: "Ocorreu um erro desconhecido" });
            }
        }
    }


    static async newEvent(req: Request, res: Response) {
        try {
            const { nome, cidade, rua, numero, complemento, emailContato, numeroContato, descricao, dataEvento, horarioInicio, horarioFim, semHorario, duracao, categoria, instituicao } = req.body;
            const requesterCase = new RegisterNewEventRequest();
            const requester = await requesterCase.execute({
                nome,
                cidade,
                rua,
                numero,
                complemento,
                emailContato,
                numeroContato,
                descricao,
                dataEvento,
                horarioInicio,
                horarioFim,
                semHorario,
                duracao,
                categoria,
                instituicao
            });
            res.status(201).json(requester);
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({ error: error.message });
            } else {
                res.status(400).json({ error: "Ocorreu um erro desconhecido" });
            }
        }
    }

    static async getAllEvents(req: Request, res: Response) {
        try {
            const { categoria, instituicao } = req.body; // <= aqui é o que precisa mudar
    
            const eventRepo = new EventRepository();
            const eventos = await eventRepo.findByCategoria(categoria, instituicao);
    
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