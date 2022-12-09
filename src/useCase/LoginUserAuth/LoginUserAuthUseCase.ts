import { IUserAuthRepository } from "../../Repositories/IUserAuthRepository";
import { ILoginUserAuthDTO } from "./ILoginUserAuthDTO";

export class LoginUserAuthUseCase{
    constructor(
        private userAuthRepository: IUserAuthRepository
    ){}

    async execute(data: ILoginUserAuthDTO){
        return await this.userAuthRepository.validationLogin(data);
    }
}