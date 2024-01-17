import multer from "multer";
import path from "path";

// Cấu hình lưu trữ tệp
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "src/uploads/Images"); // Thay đổi đường dẫn lưu trữ theo ý muốn của bạn
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname + "_" + Date.now() + path.extname(file.originalname));
    },
});

// Hàm middleware multer
const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "application/pdf" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error("Only .png, .jpg .pdf and .jpeg format allowed!"));
        }
    },
    //limits: { fileSize: 1 * 1024 * 1024 }, // Giới hạn kích thước tệp, ví dụ 1MB
});

export default upload;
