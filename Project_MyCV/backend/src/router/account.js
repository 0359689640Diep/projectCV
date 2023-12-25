import { Router } from "express";
import { signUp } from "../controllers/account.js";

const routerAccount = Router();

routerAccount.post("/signup", signUp);

export default routerAccount;