import { Router } from "express";

import { createResul, deleteResul, editResult, getAllResult } from "../controllers/resule.js";

const routerResul = Router();

routerResul.get("/all", getAllResult);
routerResul.post("/create", createResul);
routerResul.delete("/delete/:id", deleteResul);
routerResul.put("/update/:id", editResult);


export default routerResul;