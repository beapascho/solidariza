import { Event } from "../models/Event";

export class EventRepository {
    async create(eventData: Partial<Event>): Promise<Event> {
        return await Event.create(eventData);
    }


    async findByCategoria(categoria: string, instituicao: string): Promise<Event[]> {
        return await Event.findAll({
            where: { categoria, instituicao }
        });
    }

    async findByCategoriaVoluntary(categoria: string): Promise<Event[]> {
        return await Event.findAll({
            where: { categoria }
        });
    }

}
