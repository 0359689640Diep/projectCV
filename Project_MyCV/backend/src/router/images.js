import { Router } from "express";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path'; 



const routerImages = Router();
// Sử dụng import.meta.url để lấy đường dẫn tuyệt đối của mô-đun
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


routerImages.get("/get-image/:imageName", (req, res) => {
    const imageName = req.params.imageName;
    const parentDirectory = dirname(__dirname);
    res.sendFile(path.join(parentDirectory, "uploads/Images", imageName));
})

export default routerImages;
