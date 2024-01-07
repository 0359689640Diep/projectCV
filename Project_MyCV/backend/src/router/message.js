import { Router } from "express";
import { sendMessage, sendEmail, getMessage, updateStatusMessage, deleteMessage } from "../controllers/message.js";

const routerMessage = Router();

routerMessage.post("/sendmessage", sendMessage);
routerMessage.post("/updatestatusmessage/:id", updateStatusMessage);
routerMessage.get("/getemail", getMessage);
routerMessage.put("/sendemail", sendEmail);
routerMessage.delete("/deleteemail/:id", deleteMessage);

export default routerMessage;