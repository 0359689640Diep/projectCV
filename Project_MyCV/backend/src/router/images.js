import { Router } from "express";
import upload from "../middleware/uploadImage.js";
import errorHandler from "../middleware/errorHandler.js";
import { uploadImage } from "../controllers/account.js";

const routerImages = Router();

routerImages.post("/uploadImage", (req, res, next) => {
    upload.any()(req, res, (err) => {
        if (err) {
            errorHandler(err, req, res, next);
        } else {
            uploadImage(req, res);
        }
    });
});

export default routerImages;
