import { NextFunction, Request, Response } from 'express';
import { LoginUserAuthUseCase } from './LoginUserAuthUseCase';
import { loginAuthSchema } from '../../Schemas/LoginAuthSchema'

export class LoginUserAuthController {
    constructor(
        private loginUserAuthUseCase: LoginUserAuthUseCase
    ){}

    async login(req: Request, res: Response, next: NextFunction): Promise<Response>{        
        
        //executa a validação de schemas antes de ir para o UseCase
        const validateSchema = await loginAuthSchema(req.body)

        if(!validateSchema.success){
            return res.status(401).json(validateSchema);
        }

        const loginUserAuthUseCase =  await this.loginUserAuthUseCase.execute(req.body);

        //após validação no ORM, gera o ACCESS TOKEN
        // const token = jwt.sign({ name: idUser?.toString(), name:  nameUser}, process.env.SECRET_KEY, {
        //     expiresIn: '1 days',
        // }); 

        return res.json({loginUserAuthUseCase});
    }
}