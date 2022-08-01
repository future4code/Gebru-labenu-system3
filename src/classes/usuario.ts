import { v4 as uuidv4 } from 'uuid';

export class Usuario {
    protected id!: string;
    protected nome: string;
    protected email: string;
    protected data_nasc: string;
    protected turma_id: string;

    constructor(
          nome: string,
          email: string,
          data_nasc: string,
          turma_id: string
      ){
          this.nome = nome
          this.email = email
          this.data_nasc = data_nasc
          this.turma_id = turma_id
      }

      public getId(): string {
        return this.id
    }

    public getNome(): string {
      return this.nome
    }

    public getEmail(): string {
        return this.email
    }

    public getDataNasc(): string {
      return this.data_nasc
    }

    public getTurmaId(): string {
      return this.turma_id
    }

  } 