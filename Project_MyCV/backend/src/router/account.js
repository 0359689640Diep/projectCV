import { Router } from "express";

import { CreateAccount, signIn } from "../controllers/account.js";

const routerAccount = Router();

routerAccount.post("/createAccount",  CreateAccount);
routerAccount.post("/signin", signIn);

export default routerAccount;
