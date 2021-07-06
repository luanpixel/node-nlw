import { Response, Request } from "express";
import { ListUserReceiveComplimentsService } from "../services/ListuserReceiveComplimentsService";



class ListUserReceiveComplimentsController {
    async handle(request: Request, reponse: Response) {
        const { user_id } = request;

        const listUserReceiveComplimentsService = new ListUserReceiveComplimentsService();

        const compliments = await listUserReceiveComplimentsService.execute(user_id);

    }
}

export { ListUserReceiveComplimentsController }