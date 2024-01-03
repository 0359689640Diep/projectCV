import {Router} from "express";

import routerAccount from "./account.js";
import routerMessage from "./message.js"

const router = Router();

router.use("/account", routerAccount);
router.use("/send", routerMessage)

export default router;