import { Router } from "express";

import { createSkills, deleteSkills, getAllSkills, updateSkills } from "../controllers/skills.js";
import { checkPermisson } from "../middleware/checkPermission.js";

const routerSkills = Router();

routerSkills.get("/", getAllSkills);
routerSkills.post("/create",checkPermisson, createSkills);
routerSkills.delete("/delete/:id",checkPermisson, deleteSkills);
routerSkills.put("/update/:id",checkPermisson, updateSkills);

export default routerSkills;