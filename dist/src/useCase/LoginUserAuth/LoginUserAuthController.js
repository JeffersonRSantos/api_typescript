"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginUserAuthController = void 0;
const LoginAuthSchema_1 = require("../../Schemas/LoginAuthSchema");
class LoginUserAuthController {
    constructor(loginUserAuthUseCase) {
        this.loginUserAuthUseCase = loginUserAuthUseCase;
    }
    login(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            //executa a validação de schemas antes de ir para o UseCase
            const validateSchema = yield (0, LoginAuthSchema_1.loginAuthSchema)(req.body);
            if (!validateSchema.success) {
                return res.status(401).json(validateSchema);
            }
            const loginUserAuthUseCase = yield this.loginUserAuthUseCase.execute(req.body);
            //após validação no ORM, gera o ACCESS TOKEN
            // const token = jwt.sign({ name: idUser?.toString(), name:  nameUser}, process.env.SECRET_KEY, {
            //     expiresIn: '1 days',
            // }); 
            return res.json({ loginUserAuthUseCase });
        });
    }
}
exports.LoginUserAuthController = LoginUserAuthController;
