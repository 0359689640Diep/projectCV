import { Router } from "express";
import multer from "multer";
import path from "path"; // import path module

import { CreateAccount, signIn } from "../controllers/account.js";

const routerAccount = Router();
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "src/uploads/Images");
    }, 
    filename: (req, file, cb) => {
        cb(null, file.originalname + "_" + Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({storage: storage});

routerAccount.post("/CreateAccount", upload.any(), CreateAccount);
routerAccount.post("/signin", signIn);

export default routerAccount;
