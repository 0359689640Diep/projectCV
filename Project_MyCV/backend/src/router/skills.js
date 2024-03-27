import { Router } from "express";

import { createSkills, deleteSkills, getAllSkills, updateSkills } from "../controllers/skills.js";

const routerSkills = Router();

routerSkills.get("/", getAllSkills);
routerSkills.post("/create", createSkills);
routerSkills.delete("/delete/:id", deleteSkills);
routerSkills.put("/update/:id", updateSkills);

export default routerSkills;