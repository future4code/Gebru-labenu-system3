import { Turma } from './../classes/Turma';
import { BaseDatabase } from './../data/BaseDatabase';
import dotenv from "dotenv";

dotenv.config();


export class CreateClass extends BaseDatabase {
    public create =async (turma:Turma) => {
        try {
            await BaseDatabase.connection('Turma')
            .insert({
                id: turma.getId(),
                nome: turma.getNome(),
                modulo: 0
            })

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message); 
        }
    }

}
