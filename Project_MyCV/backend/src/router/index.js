import {Router} from "express";

import routerAccount from "./account.js";
import routerMessage from "./message.js";
import routerImages from "./images.js";
import routerResul from "./resule.js";
import routerSkills from "./skills.js";
import routerProject from "./project.js";

const router = Router();

router.use("/account", routerAccount);
router.use("/message", routerMessage);
router.use("/image", routerImages);
router.use("/result", routerResul);
router.use("/skills", routerSkills);
router.use("/project", routerProject);

export default router;