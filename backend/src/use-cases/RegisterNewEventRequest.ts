import { EventRepository } from "../repositories/EventRepository";

export class RegisterNewEventRequest {
  private eventRepository = new EventRepository();

  async execute(data: {
    nome: string;
    cidade: string;
    rua: string;
    numero: number;
    complemento: string;
    emailContato: string;
    numeroContato: string;
    descricao: string;
    dataEvento: Date;
    horarioInicio?: string;
    horarioFim?: string;
    semHorario: boolean;
    duracao: string;
    categoria?: string;
    instituicao: string;
  }) {
    console.log("Dados recebidos para criação do evento:");
    console.log(JSON.stringify(data, null, 2));

    return await this.eventRepository.create({
      ...data,
    });
  }
}
