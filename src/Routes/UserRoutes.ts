import { NextFunction, Request, Response, Router } from "express";

const userRoutes = Router();

userRoutes.get('/', (req: Request, res: Response, next: NextFunction) => {
    
    return res.status(200).send("Olá, seja bem vindo a aplicação 'TypeScript com SOLID' ")
})

export { userRoutes }