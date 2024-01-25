import { Router } from "express";

import { CreateAccount, signIn, cancelAPICreateAccount, getAccount } from "../controllers/account.js";

const routerAccount = Router();

routerAccount.post("/createAccount",  CreateAccount);
routerAccount.post("/signin", signIn);
routerAccount.delete("/cancelAPI", cancelAPICreateAccount);
routerAccount.get("/getAllAccount", getAccount)

export default routerAccount;
