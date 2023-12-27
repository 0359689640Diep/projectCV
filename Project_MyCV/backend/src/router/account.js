import { Router } from "express";
import { signUp, signIn } from "../controllers/account.js";

const routerAccount = Router();

routerAccount.post("/signup", signUp);
routerAccount.post("/signin", signIn);

export default routerAccount;