import { app } from "./data/app";
import { Request, Response } from "express";
import { Turma } from "./classes/Turma";
import { CreateClass } from "./endpoints/CreateClass";
import {v4 as uuiddv4} from 'uuid'


app.get('/allclass', async (req: Request, res: Response) => {
    try {
        const turmadb = new CreateClass()
        const result = await turmadb.getAll()

        res.status(200).send(result)
    } catch (error: any) {
        res.status(400).send(error.sqlMessage || error.message)
    }

})


app.post('/createclass', async (req: Request, res: Response) => {
    try {
        const { nome }= req.body

        const id = uuiddv4().toString()


       const newTurma: Turma = new Turma(id, nome, 0)

        const turmadb = new CreateClass()
        await turmadb.create(newTurma)
 
        res.status(200).send("Turma Criada!")


    } catch (error: any) {
        res.status(400).send(error.sqlMessage || error.message)
    }
})

app.put('/altermodulo/:nome', async (req: Request, res: Response) => {
    try {
        const nome = req.params.nome as string
        const modulo = req.body.modulo

    const turmamodulo = new CreateClass() // estanciar
    await turmamodulo.alter(modulo, nome)
    
        res.status(200).send("Modulo alterado.")
        
    } catch (error:any) {
        res.status(400).send(error.sqlMessage || error.message)
    
    }
})