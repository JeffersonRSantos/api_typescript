import { MysqlProvider } from "../../Repositories/implementations/MysqlProvider"
import { LoginUserAuthController } from "./LoginUserAuthController"
import { LoginUserAuthUseCase } from "./LoginUserAuthUseCase"

const mysqlProvider = new MysqlProvider();

const loginUserAuthUseCase = new LoginUserAuthUseCase(
    mysqlProvider
)

const loginUserAuthController = new LoginUserAuthController(
    loginUserAuthUseCase
)

export { loginUserAuthController }