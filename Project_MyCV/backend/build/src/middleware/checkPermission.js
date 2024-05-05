"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkPermisson = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _account = _interopRequireDefault(require("../model/account.js"));
var _JWTAction = require("./JWTAction.js");
_dotenv["default"].config();
var checkPermisson = exports.checkPermisson = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var _req$headers$authoriz, token, decoded, user, checkToken;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          // kiểm tra người dùng đã đăng nhập hay chưa
          token = (_req$headers$authoriz = req.headers.authorization) === null || _req$headers$authoriz === void 0 ? void 0 : _req$headers$authoriz.split(" ")[1]; // kiểm tra token
          decoded = (0, _JWTAction.verifyToken)(token); // lấy token đã lưu trong db xem có hay không
          _context.next = 5;
          return _account["default"].findById(decoded._id);
        case 5:
          user = _context.sent;
          //nếu không tồn tại token gửi lên, token đó  hết hạn, không tìm thấy token trong db, hoặc token đó  rỗng trên db
          checkToken = user.Token[0].accessToken === token;
          if (!(decoded === false || user === null || checkToken === false || user.Token.length === 0)) {
            _context.next = 9;
            break;
          }
          return _context.abrupt("return", res.status(403).json({
            message: "Login to use the service"
          }));
        case 9:
          req.user = user;
          // next
          next();
          _context.next = 16;
          break;
        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", res.status(403).json({
            message: "Login to use the service"
          }));
        case 16:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 13]]);
  }));
  return function checkPermisson(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();