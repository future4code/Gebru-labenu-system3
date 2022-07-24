import { app } from "./data/app";
import { Request, Response } from "express";
import { Turma } from "./classes/Turma";
import { CreateClass } from "./endpoints/CreateClass";


app.post('/createclass', async (req: Request, res: Response) => {
    try {
        
        const {nome, modulo} = req.body
        const id = Math.random().toString()

        const newTurma :Turma = new Turma(id, nome, modulo)
        const turmadb = new CreateClass()

        await turmadb.create(newTurma)
        res.status(200).send("Turma Criada!")


    } catch (error: any) {
        res.status(400).send(error.sqlMessage || error.message)
    }
})