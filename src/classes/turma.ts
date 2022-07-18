
type estud = {
    id: string;
    name: string
}

type docen = {
    id: string;
    name: string
}

export class Turma {

    private id!: string;
    private nome: string;
    private estudante: Array<estud>;
    private docente: Array<docen>;
    private modulo: number;

    constructor(
        nome: string,
        estudante: Array<estud>,
        docente: Array<docen>,
        modulo: number = 0
    ) {
        this.nome = nome;
        this.estudante = estudante;
        this.docente = docente;
        this.modulo = modulo;
    }

    public getId(): string {
        return this.id
    }

    public getNome(): string {
      return this.nome
    }

    public getEstudante(): Array<estud> {
        return this.estudante
    }

    public getDocente(): Array<docen> {
      return this.docente
    }

    public getModulo(): number {
      return this.modulo
    }
} 