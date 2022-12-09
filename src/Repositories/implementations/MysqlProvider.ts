import { UserAuth } from "../../Entities/UserAuth";
import { IUserAuthRepository } from "../IUserAuthRepository";

export class MysqlProvider implements IUserAuthRepository{
    async validationLogin(props: Object): Promise<UserAuth> {
        //faz a validação no banco de dados e retorna o usuário
        return {nome: "Nenhum Provider ORM configurado", email: "jefer@tesmte.com", password: "teste"}
    }
}