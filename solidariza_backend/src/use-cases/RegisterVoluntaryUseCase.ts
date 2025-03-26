import bcrypt from "bcryptjs";
import { VoluntaryRepository } from "../repositories/VoluntaryRepository";

export class RegisterVoluntaryUseCase { 

    private voluntaryRepository = new VoluntaryRepository();

    async execute(
        name: string, 
        email: string, 
        password: string, 
        cpf: string, 
        contact_number: string, 
        birth_date: Date, 
        cep: string
    ) {

        const cpfStr = cpf.padStart(11, "0"); 

        if (!this.validateCPF(cpfStr)) {
            throw new Error("CPF inválido");
        }

        const voluntaryExists = await this.voluntaryRepository.findByEmail(email); 
        if(voluntaryExists) throw new Error("Voluntário já cadastrado"); 

        const voluntaryCpfExists = await this.voluntaryRepository.findByCPF(cpf); 
        if(voluntaryCpfExists) throw new Error("CPF já cadastrado"); 

        const hashedPassword = await bcrypt.hash(password, 10); 
        return await this.voluntaryRepository.create({name, email, password: hashedPassword, cpf, contact_number,  birth_date,  cep});
    }


    private validateCPF(cpf: string): boolean {
        if (cpf.length !== 11 || !/^\d+$/.test(cpf)) return false;

        if (["00000000000", "11111111111", "22222222222", "33333333333", 
             "44444444444", "55555555555", "66666666666", "77777777777", 
             "88888888888", "99999999999"].includes(cpf)) {
            return false;
        }

        let sum = 0;
        for (let i = 0; i < 9; i++) {
            sum += parseInt(cpf[i]) * (10 - i);
        }
        let firstCheck = (sum * 10) % 11;
        if (firstCheck === 10 || firstCheck === 11) firstCheck = 0;
        if (firstCheck !== parseInt(cpf[9])) return false;

        sum = 0;
        for (let i = 0; i < 10; i++) {
            sum += parseInt(cpf[i]) * (11 - i);
        }
        let secondCheck = (sum * 10) % 11;
        if (secondCheck === 10 || secondCheck === 11) secondCheck = 0;
        if (secondCheck !== parseInt(cpf[10])) return false;

        return true;
    }
}