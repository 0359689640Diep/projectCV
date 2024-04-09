import { Router } from "express";
import { sendMessage, replyGmail, getMessage, updateStatusMessage, deleteMessage } from "../controllers/message.js";
import { checkPermisson } from "../middleware/checkPermission.js";

const routerMessage = Router();

routerMessage.post("/sendmessage", sendMessage);
routerMessage.put("/reply-email/:id",checkPermisson, replyGmail);
routerMessage.post("/updatestatusmessage/:id",checkPermisson, updateStatusMessage);
routerMessage.get("/getemail",checkPermisson, getMessage);
routerMessage.put("/sendemail",checkPermisson, replyGmail);
routerMessage.delete("/deleteemail/:id",checkPermisson, deleteMessage);

export default routerMessage;