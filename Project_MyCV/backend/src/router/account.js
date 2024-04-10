import { Router } from "express";

import { CreateAccount, signIn,  getAccount, deleteAccount, updateAccount, getAccountByRequest } from "../controllers/account.js";
import {upload, handleInvalidFile, deleteUploadImg} from "../middleware/image.js";
import { checkPermisson } from "../middleware/checkPermission.js";

const routerAccount = Router();
const getImageUrl = (filename) => {
    // Đường dẫn đến thư mục chứa ảnh trên máy chủ
    const imageDirectory = '/uploads/Images/';
    // URL của máy chủ
    const serverUrl = 'http://localhost:7000';
    // Tạo URL của ảnh bằng cách kết hợp đường dẫn thư mục và tên tệp
    return serverUrl + imageDirectory + filename;
};

routerAccount.get('/images/:filename', async (req, res) => {
    try {
        const filename = req.params.filename;
        // Tạo URL của hình ảnh từ tên tệp
        const imageUrl = getImageUrl(filename);
        // Trả về URL của hình ảnh
        res.send(imageUrl);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Đã xảy ra lỗi khi lấy hình ảnh từ cơ sở dữ liệu' });
    }
});
routerAccount.post("/createAccount",checkPermisson, upload, handleInvalidFile, deleteUploadImg, CreateAccount);
routerAccount.get("/getAllAccount", getAccount);
routerAccount.get("/:request", getAccountByRequest);
routerAccount.delete("/deleteAccount/:id",checkPermisson, deleteAccount);
routerAccount.put("/updateAccount/:id",checkPermisson, upload, handleInvalidFile, deleteUploadImg,updateAccount);

routerAccount.post("/signin", signIn);


export default routerAccount;
