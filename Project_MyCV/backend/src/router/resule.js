import { Router } from "express";

import { createResul, deleteResul, editResult, getAllResult, getAll } from "../controllers/resule.js";
import { checkPermisson } from "../middleware/checkPermission.js";

const routerResul = Router();

routerResul.get("/:type", getAllResult);
routerResul.get("/", getAll);
routerResul.post("/create",checkPermisson, createResul);
routerResul.delete("/delete/:id",checkPermisson, deleteResul);
routerResul.put("/update/:id",checkPermisson, editResult);


export default routerResul;