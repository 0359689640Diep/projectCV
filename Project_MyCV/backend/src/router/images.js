import { Router } from "express";
import upload from "../middleware/uploadImage.js";

import {uploadImage } from "../controllers/account.js";

const routerImages = Router();

routerImages.post("/uploadImage", upload.any(), uploadImage);


export default routerImages;
