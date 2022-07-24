import { Usuario } from "./Usuario";

type hobby = {
    name: string
}

export class Estudante extends Usuario {

   private hobbies: Array<hobby>;

    constructor(
        nome: string,
        email: string,
        data_nasc: string,
        turma_id: string,
        hobbies: Array<hobby>
    ) {
      super(nome, email,data_nasc, turma_id);
      this.hobbies = hobbies;
    }

    public getHobbies(): Array<hobby> {
        return this.hobbies
    }
} 