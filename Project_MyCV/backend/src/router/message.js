import { Router } from "express";
import { sendMessage } from "../controllers/message.js";

const routerMessage = Router();

routerMessage.post("/sendmessage", sendMessage);

export default routerMessage;