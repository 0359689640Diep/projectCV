import { Router } from "express";
import { create, getAll, remove, update } from "../controllers/project.js";
import { deleteUploadImg, handleInvalidFile, upload } from "../middleware/image.js";
import { checkPermisson } from "../middleware/checkPermission.js";

const routerProject = Router();

routerProject.get("/", getAll);
routerProject.post("/create",checkPermisson, upload, handleInvalidFile, deleteUploadImg, create);
routerProject.put("/update/:id",checkPermisson, upload, handleInvalidFile, deleteUploadImg, update);
routerProject.delete("/delete/:id",checkPermisson, remove);

export default routerProject;