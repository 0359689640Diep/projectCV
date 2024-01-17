import {Router} from "express";

import routerAccount from "./account.js";
import routerMessage from "./message.js"
import routerImages from "./images.js"

const router = Router();

router.use("/account", routerAccount);
router.use("/message", routerMessage);
router.use("/image", routerImages);

export default router;