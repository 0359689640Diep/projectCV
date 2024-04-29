import { Router } from "express";
import dotenv from "dotenv";

import { CreateAccount, signIn,  getAccount, deleteAccount, updateAccount, getAccountByRequest, getAccountForClient, signOut } from "../controllers/account.js";
import {upload, handleInvalidFile, deleteUploadImg} from "../middleware/image.js";
import { checkPermisson } from "../middleware/checkPermission.js";

dotenv.config();

const routerAccount = Router();

routerAccount.post("/createAccount",checkPermisson, upload, handleInvalidFile, deleteUploadImg, CreateAccount);
routerAccount.get("/getAllAccount", checkPermisson, getAccount);
routerAccount.get("/getAllAccountForClient", getAccountForClient);
routerAccount.get("/:request", getAccountByRequest);
routerAccount.delete("/deleteAccount/:id",checkPermisson, deleteAccount);
routerAccount.put("/updateAccount/:id",checkPermisson, upload, handleInvalidFile, deleteUploadImg,updateAccount);
routerAccount.post("/sign-out", signOut)

routerAccount.post("/signin", signIn);


export default routerAccount;
