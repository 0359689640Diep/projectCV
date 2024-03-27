import { Router } from "express";
import { create, getAll, remove, update } from "../controllers/project.js";
import { deleteUploadImg, handleInvalidFile, upload } from "../middleware/image.js";

const routerProject = Router();

routerProject.get("/", getAll);
routerProject.post("/create", upload, handleInvalidFile, deleteUploadImg, create);
routerProject.put("/update/:id", upload, handleInvalidFile, deleteUploadImg, update);
routerProject.delete("/delete/:id", remove);

export default routerProject;