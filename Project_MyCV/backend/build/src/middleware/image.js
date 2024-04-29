"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteUploadImg = void 0;
exports.handleInvalidFile = handleInvalidFile;
exports.upload = void 0;
var _multer = _interopRequireDefault(require("multer"));
var _fs = _interopRequireDefault(require("fs"));
// Cấu hình lưu trữ tệp
var storage = _multer["default"].diskStorage({
  destination: function destination(req, file, cb) {
    cb(null, "src/uploads/Images"); // Thay đổi đường dẫn lưu trữ theo ý muốn của bạn
  },
  filename: function filename(req, file, cb) {
    cb(null, Date.now() + file.originalname);
  }
});

// Hàm middleware multer
var upload = exports.upload = (0, _multer["default"])({
  storage: storage,
  fileFilter: function fileFilter(req, file, cb) {
    if (file.mimetype == "image/png" || file.mimetype == "application/pdf" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Hệ thống chỉ cho phép tải lên các file định dạng .png, .jpg, .pdf và .jpeg"));
    }
  }
  //limits: { fileSize: 1 * 1024 * 1024 }, // Giới hạn kích thước tệp, ví dụ 1MB
}).fields([{
  name: "CV",
  maxCount: 1
}, {
  name: "Image",
  maxCount: 4
}, {
  name: "Logo",
  maxCount: 1
}, {
  name: "IconLogo",
  maxCount: 1
} // Định nghĩa cấu hình cho trường "Image"
]);

// xử lý lỗi khi tệp tải lên không hợp lệ
function handleInvalidFile(err, req, res, next) {
  if (err instanceof _multer["default"].MulterError) {
    return res.status(400).json({
      message: err.message
    });
  } else if (err) {
    return res.status(500).json({
      message: "Hệ thống đang bảo trì"
    });
  }
  // Nếu không có lỗi, chuyển tiếp sang middleware hoặc controller tiếp theo
  next();
}
var deleteUploadImg = exports.deleteUploadImg = function deleteUploadImg(req, res, next) {
  if (res.headersSent || res.satausCode >= 400) {
    if (req.files) {
      for (var key in req.files) {
        req.files[key].array.forEach(function (file) {
          _fs["default"].unlink(file.path, function (err) {
            console.error("Error deleting file", err);
          });
        });
      }
    }
  }
  next();
};