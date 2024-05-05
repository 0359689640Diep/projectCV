import multer from "multer";
import fs from "fs";

// Cấu hình lưu trữ tệp
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "src/uploads/Images"); // Thay đổi đường dẫn lưu trữ theo ý muốn của bạn
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname);
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
            return cb(new Error("Hệ thống chỉ cho phép tải lên các file định dạng .png, .jpg, .pdf và .jpeg"));
        }
    },
    //limits: { fileSize: 1 * 1024 * 1024 }, // Giới hạn kích thước tệp, ví dụ 1MB
})
.fields([
    {name: "CV", maxCount: 1},
    {name: "Image", maxCount: 4},
    {name: "Logo", maxCount: 1},
    {name: "IconLogo", maxCount: 1} // Định nghĩa cấu hình cho trường "Image"
]);



// xử lý lỗi khi tệp tải lên không hợp lệ
function handleInvalidFile(err, req, res, next) {
    if (err instanceof multer.MulterError) {
        return res.status(400).json({ message: err.message });
    } else if (err) {
        console.log(err);
        return res.status(500).json({ message: "Hệ thống đang bảo trì" });
    }
    // Nếu không có lỗi, chuyển tiếp sang middleware hoặc controller tiếp theo
    next();
}

const deleteUploadImg = (req, res, next) => {
    
    if(res.headersSent || res.satausCode >= 400){
        if(req.files) {
            for(const key in req.files){
                req.files[key].array.forEach(file => {
                    fs.unlink(file.path, (err) => {
                        console.error("Error deleting file", err);
                    })
                });
            }
        }
    }
    next();
}

export { upload, handleInvalidFile, deleteUploadImg};
