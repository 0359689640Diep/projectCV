import { Router } from "express";

import { createResul, deleteResul, editResult, getAllResult, getAll } from "../controllers/resule.js";

const routerResul = Router();

routerResul.get("/:type", getAllResult);
routerResul.get("/", getAll);
routerResul.post("/create", createResul);
routerResul.delete("/delete/:id", deleteResul);
routerResul.put("/update/:id", editResult);


export default routerResul;