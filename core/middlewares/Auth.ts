import jwt, { Secret, JwtPayload } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

export const SECRET_KEY: Secret = '9f03fe6c-069b-42b7-8b1d-a2034897a0bb';

export interface CustomRequest extends Request {
    token: string | JwtPayload;
}

export const Auth = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.header('Authorization')?.replace('Bearer ', '');

        if (!token) {
            throw new Error();
        }

        const decoded = jwt.verify(token, SECRET_KEY);
        (req as CustomRequest).token = decoded;

        next();
    } catch (err) {
        res.status(401).json({status: 401, error: "Essa rota requer autenticação."});
    }
};