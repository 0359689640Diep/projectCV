import {Router} from "express";

import routerAccount from "./account.js";

const router = Router();

router.use("/account", routerAccount);

export default router;