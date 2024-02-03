import { Router } from "express";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path'; 

import upload from "../middleware/uploadImage.js";
import errorHandler from "../middleware/errorHandler.js";
import { uploadImage } from "../controllers/account.js";


const routerImages = Router();
// Sử dụng import.meta.url để lấy đường dẫn tuyệt đối của mô-đun
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

routerImages.post("/uploadImage", (req, res, next) => {
    upload.any()(req, res, (err) => {
        if (err) {
            errorHandler(err, req, res, next);
        } else {
            uploadImage(req, res);
        }
    });
});

routerImages.get("/getImages/:imageName", (req, res) => {
    const imageName = req.params.imageName;
    const parentDirectory = dirname(__dirname);
    res.sendFile(path.join(parentDirectory, "uploads/Images", imageName));
})

export default routerImages;
