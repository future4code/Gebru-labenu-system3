import { knex } from 'knex';
import { Turma } from './../classes/Turma';
import { BaseDatabase } from './../data/BaseDatabase';
import dotenv from "dotenv";


dotenv.config();

export class CreateClass extends BaseDatabase {

    public getAll = async () => {

        try {
            const result = await CreateClass.connection('Turma')
                .select('*')
                .where('modulo', '>', 0)

            return result
        } catch (error: any) {
            throw new error(error.sqlMessage || error.message)
        }
    }

    public create = async (turma: Turma) => {
        try {
            await BaseDatabase.connection('Turma')
                .insert({
                    id: turma.getId(),
                    nome: turma.getNome(),
                    modulo: turma.getModulo()
                })

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public alter = async (modulo: Number, nome: string) => {
        try {
            await BaseDatabase.connection('Turma')
                .update({
                    modulo: modulo
                })
                .where({ nome: nome})

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
}
