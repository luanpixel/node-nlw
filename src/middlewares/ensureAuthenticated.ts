import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
    sub: string;
}

export function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction
) {
    // Recebendo Token
    const authToken = request.headers.authorization

    // Validar se o Token está preenchido
    if (!authToken) {
        return response.status(401).end();
    }

    const [, Token] = authToken.split(" ");

    // Validar se Token é valido
    try {
        const { sub } = verify(Token, "18a0199a95c2a06fb796f986e3ca6561") as IPayload;

        request.user_id = sub;

        return next();
    } catch (err) {
        return response.status(401).end();
    }

    // Recuperar informações do usuário


}

