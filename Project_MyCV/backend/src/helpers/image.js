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

const deleteImage = (files) => {
    if (files) {
        if (typeof files === 'string') {
            // Nếu files là một chuỗi
            let pathFile = "src/uploads/Images/" + files;
            fs.unlink(pathFile, (err) => {
                console.log(err);
                return err;
            })
        } else if (Array.isArray(files)) {
            // Nếu files là một mảng
            for (const item of files) {
                let pathFile = "src/uploads/Images/" + item;
            fs.unlink(pathFile, (err) => {
                console.log(err);
                return err;
            })
            }
        } else {
            console.error("Invalid 'files' parameter.");
        }
    } else {
        console.error("No 'files' parameter provided.");
    }
}



export {deleteUploadedImages, deleteImage};