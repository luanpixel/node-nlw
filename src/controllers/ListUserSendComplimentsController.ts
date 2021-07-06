import { Response, Request } from "express";
import { ListUserSendComplimentsService } from "../services/ListUserSendComplimentsService";



class ListUserSendComplimentsController {
    async handle(request: Request, reponse: Response) {
        const { user_id } = request;

        const listUserSendComplimentsService = new ListUserSendComplimentsService();

        const compliments = await listUserSendComplimentsService.execute(user_id);

    }
}

export { ListUserSendComplimentsController }