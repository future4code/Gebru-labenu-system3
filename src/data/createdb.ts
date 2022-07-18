import { BaseDatabase } from './connection'

const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

class CreateDB extends BaseDatabase {

   private closeConnection = () => { BaseDatabase.connection.destroy() }
   private createTables = () => BaseDatabase.connection
   .raw(`
      CREATE TABLE IF NOT EXISTS TURMA (
         id VARCHAR(255) PRIMARY KEY,
         nome VARCHAR(255),
         modulo VARCHAR(255) DEFAULT 0
      );
      CREATE TABLE IF NOT EXISTS ESTUDANTE (
         id VARCHAR(255) PRIMARY KEY,
         nome VARCHAR(255) NOT NULL,
         email VARCHAR(255) NOT NULL UNIQUE,
         data_nasc DATE NOT NULL,
         turma_id VARCHAR(255) NOT NULL,
         FOREIGN KEY(turma_id) REFERENCES TURMA(id)
      );
      CREATE TABLE IF NOT EXISTS HOBBY (
         id VARCHAR(255) PRIMARY KEY,
         nome VARCHAR(255) NOT NULL UNIQUE
      );
      CREATE TABLE IF NOT EXISTS ESTUDANTE_HOBBY (
        id VARCHAR(255) PRIMARY KEY,
        estudante_id VARCHAR(255) NOT NULL,
        hobby_id VARCHAR(255) NOT NULL,
        FOREIGN KEY(estudante_id) REFERENCES ESTUDANTE(id),
        FOREIGN KEY(hobby_id) REFERENCES HOBBY(id)
     );
     CREATE TABLE IF NOT EXISTS DOCENTE (
        id VARCHAR(255) PRIMARY KEY,
        nome VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        data_nasc DATE NOT NULL,
        turma_id VARCHAR(255) NOT NULL,
        FOREIGN KEY(turma_id) REFERENCES TURMA(id)
     );
     CREATE TABLE IF NOT EXISTS ESPECIALIDADE (
      id VARCHAR(255) PRIMARY KEY,
      nome VARCHAR(255) NOT NULL UNIQUE
   );
     CREATE TABLE IF NOT EXISTS DOCENTE_ESPECIALIDADE (
        id VARCHAR(255) PRIMARY KEY,
        docente_id VARCHAR(255) NOT NULL,
        especialidade_id VARCHAR(255) NOT NULL,
        FOREIGN KEY(docente_id) REFERENCES DOCENTE(id),
        FOREIGN KEY(especialidade_id) REFERENCES ESPECIALIDADE(id)
     );
`)
   .then(() => { console.log("Tabelas criadas") })
   .catch(printError)
   .finally(this.closeConnection)

   public createDB = () => {
      return this.createTables()
   }
   static createDB: any
   
}

const newDatabase = new CreateDB;

newDatabase.createDB();





