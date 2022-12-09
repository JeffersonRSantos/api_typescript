import { NextFunction, Request, Response, Router } from "express"
import { loginUserAuthController } from "../useCase/LoginUserAuth";

const authRoutes = Router();

authRoutes.post('/login', (req: Request, res: Response, next: NextFunction) => {
    return loginUserAuthController.login(req, res, next);
})

export { authRoutes }