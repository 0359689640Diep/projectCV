"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _nodemailer = _interopRequireDefault(require("nodemailer"));
var _dotenv = _interopRequireDefault(require("dotenv"));
_dotenv["default"].config();
var sendMail = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(email, subject, html) {
    var form,
      transporter,
      message,
      _args = arguments;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          form = _args.length > 3 && _args[3] !== undefined ? _args[3] : "Hi Nice To Miss You";
          _context.prev = 1;
          transporter = _nodemailer["default"].createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
              user: process.env.email,
              pass: process.env.password_mail
            }
          });
          message = {
            from: form,
            to: email,
            subject: subject,
            html: html
          };
          _context.next = 6;
          return transporter.sendMail(message);
        case 6:
          return _context.abrupt("return", true);
        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](1);
          console.error("Lỗi khi gửi email:", _context.t0);

          // Trả về false nếu có lỗi và log ra lỗi
          return _context.abrupt("return", false);
        case 13:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[1, 9]]);
  }));
  return function sendMail(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
var _default = exports["default"] = sendMail;