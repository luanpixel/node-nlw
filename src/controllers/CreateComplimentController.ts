import { Request, Response } from "express";
import { CreateComplimentService } from "../services/CreateComplimentService";


class CreatecomplimentController {
    async handle(request: Request, response: Response) {
        const { tag_id, user_receiver, user_sender, message } = request.body;

        const createComplimentService = new CreateComplimentService();

        const compliment = await createComplimentService.execute({
            tag_id,
            user_sender,
            user_receiver,
            message,
        });

        return response.json(compliment);
    }


}

export { CreatecomplimentController }