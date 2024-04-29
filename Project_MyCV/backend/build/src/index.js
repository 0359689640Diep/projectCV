"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _express = _interopRequireDefault(require("express"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _cors = _interopRequireDefault(require("cors"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
var _path = _interopRequireDefault(require("path"));
var _cookieParser = _interopRequireDefault(require("cookie-parser"));
var _index = _interopRequireDefault(require("./router/index.js"));
var _database = _interopRequireDefault(require("./configs/database.js"));
var app = (0, _express["default"])();
_dotenv["default"].config();
var port = process.env.port;

// Thay đổi origin tùy theo trang web của bạn
// const allowedOrigins = [process.env.serverUrl];

// const corsOptions = {
//   origin: function(origin, callback) {
//     if (!origin || allowedOrigins.includes(origin)) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   }
// };

// app.use(cors(corsOptions));
(0, _database["default"])();
app.use(_express["default"].json());
app.use((0, _cors["default"])({
  credentials: true // Cho phép gửi cookie qua CORS
}));
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
app.use(_bodyParser["default"].json());
app.use((0, _cookieParser["default"])());
app.use("/api", _index["default"]);
// Định nghĩa thư mục lưu trữ ảnh
app.use("/uploads/Images", _express["default"]["static"](_path["default"].join(process.cwd(), "uploads/Images")));
app.listen(port, function () {
  console.log("Server is running on port: ".concat(port));
});