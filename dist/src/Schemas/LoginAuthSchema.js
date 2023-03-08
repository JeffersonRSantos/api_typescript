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
exports.loginAuthSchema = void 0;
const zod_1 = require("zod");
const loginAuthSchema = (props) => __awaiter(void 0, void 0, void 0, function* () {
    const obj = zod_1.z.object({
        nome: zod_1.z.string().min(4, { message: "Campo nome precisa conter no mínimo 4 caracteres." }),
        email: zod_1.z.string().email({ message: "Campo e-mail, com formato inválido." }),
        password: zod_1.z.string().min(6, { message: "Campo senha precisa conter no mínimo 6 caracteres." })
    }).safeParse(props);
    if (!obj.success) {
        obj.error.issues;
    }
    return obj;
});
exports.loginAuthSchema = loginAuthSchema;
