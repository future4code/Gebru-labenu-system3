import { Usuario } from "./Usuario";

enum espec {
    JS = "Javascript",
    CSS = "CSS",
    REACT = "React",
    TS = "Typescript",
    POO = "Programação Orientada a Objetos"
}

export class Docente extends Usuario {

   private especialidade: espec;

    constructor(
        nome: string,
        email: string,
        data_nasc: string,
        turma_id: string,
        especialidade: espec
    ) {
      super(nome, email,data_nasc, turma_id);
      this.especialidade = especialidade;
    }

    public getEspecialidade(): espec {
        return this.especialidade
    }
} 