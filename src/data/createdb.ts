import { BaseDatabase } from './BaseDatabase'

const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

class CreateDB extends BaseDatabase {

   private closeConnection = () => { BaseDatabase.connection.destroy() }
   private createTables = () => BaseDatabase.connection
   .raw(`
      CREATE TABLE IF NOT EXISTS Turma (
         id VARCHAR(255) PRIMARY KEY,
         nome VARCHAR(255) UNIQUE NOT NULL,
         modulo INT DEFAULT 0
      );
      CREATE TABLE IF NOT EXISTS Estudante (
         id VARCHAR(255) PRIMARY KEY,
         nome VARCHAR(255) NOT NULL,
         email VARCHAR(255) NOT NULL UNIQUE,
         data_nasc DATE NOT NULL,
         turma_id VARCHAR(255) NOT NULL,
         FOREIGN KEY(turma_id) REFERENCES Turma(id)
      );
      CREATE TABLE IF NOT EXISTS Hobby (
         id VARCHAR(255) PRIMARY KEY,
         nome VARCHAR(255) NOT NULL UNIQUE
      );
      CREATE TABLE IF NOT EXISTS Estudante_Hobby (
        id VARCHAR(255) PRIMARY KEY,
        estudante_id VARCHAR(255) NOT NULL,
        hobby_id VARCHAR(255) NOT NULL,
        FOREIGN KEY(estudante_id) REFERENCES Estudante(id),
        FOREIGN KEY(hobby_id) REFERENCES Hobby(id)
     );
     CREATE TABLE IF NOT EXISTS Docente (
        id VARCHAR(255) PRIMARY KEY,
        nome VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        data_nasc DATE NOT NULL,
        turma_id VARCHAR(255) NOT NULL,
        FOREIGN KEY(turma_id) REFERENCES Turma(id)
     );
     CREATE TABLE IF NOT EXISTS Especialidade (
      id VARCHAR(255) PRIMARY KEY,
      nome VARCHAR(255) NOT NULL UNIQUE
   );
     CREATE TABLE IF NOT EXISTS Docente_Especialidade (
        id VARCHAR(255) PRIMARY KEY,
        docente_id VARCHAR(255) NOT NULL,
        especialidade_id VARCHAR(255) NOT NULL,
        FOREIGN KEY(docente_id) REFERENCES Docente(id),
        FOREIGN KEY(especialidade_id) REFERENCES Especialidade(id)
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





