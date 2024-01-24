import { Router } from "express";

import { CreateAccount, signIn, cancelAPICreateAccount } from "../controllers/account.js";

const routerAccount = Router();

routerAccount.post("/createAccount",  CreateAccount);
routerAccount.post("/signin", signIn);
routerAccount.delete("/cancelAPI", cancelAPICreateAccount);

export default routerAccount;
