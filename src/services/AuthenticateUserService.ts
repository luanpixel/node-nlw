import { getCustomRepository } from "typeorm"
import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"
import { UsersRepositories } from "../repositories/UsersRepositories"


interface IAuthenticateReques {
    email: string;
    password: string;
}

class AuthenticateUserService {
    async execute({ email, password }: IAuthenticateReques) {
        const usersRepositories = getCustomRepository(UsersRepositories);

        //Verificar se email existe
        const userExists = await usersRepositories.findOne({
            email
        });

        if (!userExists) {
            throw new Error("Email/Password incorrect")
        }

        //Verificar se senha está correta

        //12345678 / 98765432-jhdfjksdhfjkhdf5465484
        const passMatch = await compare(password, userExists.password)

        if (!passMatch) {
            throw new Error("Email/Password incorrect")
        }

        //Gerar Token
        const Token = sign(
            {
                email: userExists.email,
            },
            "18a0199a95c2a06fb796f986e3ca6561",
            {
                subject: userExists.id,
                expiresIn: "1d",
            }
        );

        return Token;
    }

}

export { AuthenticateUserService };
