import {Voluntary} from "../models/Voluntary"; 

export class VoluntaryRepository { 
    async create(userData: Partial<Voluntary>): Promise<Voluntary> {
        return await Voluntary.create(userData);
    }

    async findByEmail(email: string): Promise<Voluntary | null> {
        return await Voluntary.findOne({where: {email}});
    }

    async findByCPF(cpf: string): Promise<Voluntary | null> {
        return await Voluntary.findOne({where: {cpf}});
    }

    async findAll(): Promise<Voluntary[]> {
        return await Voluntary.findAll();
    }
 }