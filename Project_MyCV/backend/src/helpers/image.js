import fs from "fs";

// Hàm để xóa các file ảnh đã tải lên
const deleteUploadedImages = (files) => {
    if (files) {
        for (const key in files) {
            files[key].forEach(file => {
                // Xóa file ảnh
                fs.unlink(file.path, (err) => {
                    if (err) {
                        console.error("Error deleting file:", err);
                    }
                });
            });
        }
    }
};


export {deleteUploadedImages};