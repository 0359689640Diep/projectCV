import { Router } from "express";
import { sendMessage, replyGmail, getMessage, updateStatusMessage, deleteMessage } from "../controllers/message.js";

const routerMessage = Router();

routerMessage.post("/sendmessage", sendMessage);
routerMessage.put("/reply-email/:id", replyGmail);
routerMessage.post("/updatestatusmessage/:id", updateStatusMessage);
routerMessage.get("/getemail", getMessage);
routerMessage.put("/sendemail", replyGmail);
routerMessage.delete("/deleteemail/:id", deleteMessage);

export default routerMessage;