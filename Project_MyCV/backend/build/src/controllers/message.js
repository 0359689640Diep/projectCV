"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateStatusMessage = exports.sendMessage = exports.replyGmail = exports.getMessage = exports.deleteMessage = void 0;
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _message = _interopRequireDefault(require("../model/message.js"));
var _message2 = require("../validation/message.js");
var _sendEmail = _interopRequireDefault(require("../helpers/sendEmail.js"));
var _excluded = ["EmailReceiver"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var sendMessage = exports.sendMessage = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, NameUserReceiver, EmailReceiver, TitleMessage, Content, _sendMessageValidator, error, errors, subject, html;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, NameUserReceiver = _req$body.NameUserReceiver, EmailReceiver = _req$body.EmailReceiver, TitleMessage = _req$body.TitleMessage, Content = _req$body.Content;
          _sendMessageValidator = _message2.sendMessageValidator.validate(req.body, {
            abortEarly: false
          }), error = _sendMessageValidator.error;
          if (!error) {
            _context.next = 6;
            break;
          }
          errors = error.details.map(function (error) {
            return error.message;
          });
          return _context.abrupt("return", res.status(400).json({
            message: errors[0]
          }));
        case 6:
          _context.next = 8;
          return _message["default"].create(_objectSpread({}, req.body));
        case 8:
          subject = "Notification";
          html = "\n            <h1> ".concat(NameUserReceiver, ":  Sent you a message from the CV website </h1> \n            <ul>\n                <li>Email Receiver: ").concat(EmailReceiver, "</li>\n                <li>Title Message: ").concat(TitleMessage, "</li>\n                <li>Content: ").concat(Content, "</li>\n            </ul>\n        ");
          (0, _sendEmail["default"])("vudiep621@gmail.com", subject, html);
          return _context.abrupt("return", res.status(200).json({
            message: "Thank you for sending me message. I will reply you as soon as possible"
          }));
        case 14:
          _context.prev = 14;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
          return _context.abrupt("return", res.status(500).json({
            message: "The system is maintenance"
          }));
        case 18:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 14]]);
  }));
  return function sendMessage(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var getMessage = exports.getMessage = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var dataMessage;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return _message["default"].find({
            Status: {
              $ne: 2
            }
          });
        case 3:
          dataMessage = _context2.sent;
          if (!(dataMessage.length === 0)) {
            _context2.next = 8;
            break;
          }
          return _context2.abrupt("return", res.status(404).json({
            message: "No messages"
          }));
        case 8:
          return _context2.abrupt("return", res.status(200).json({
            dataMessage: dataMessage
          }));
        case 9:
          _context2.next = 15;
          break;
        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0.message);
          return _context2.abrupt("return", res.status(500).json({
            message: "The system is maintenance"
          }));
        case 15:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 11]]);
  }));
  return function getMessage(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var replyGmail = exports.replyGmail = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var ReplyMessage, id, _replyMessageValidato, error, errors, result, EmailReceiver, data, TitleMessage, mailEmail;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          ReplyMessage = req.body.ReplyMessage;
          id = req.params.id;
          _replyMessageValidato = _message2.replyMessageValidator.validate(req.body, {
            abortEarly: false
          }), error = _replyMessageValidato.error;
          if (!error) {
            _context3.next = 7;
            break;
          }
          errors = error.details.map(function (error) {
            return error.message;
          });
          return _context3.abrupt("return", res.status(400).json({
            message: errors[0]
          }));
        case 7:
          _context3.next = 9;
          return _message["default"].findByIdAndUpdate({
            _id: id
          }, {
            $set: {
              Status: 1,
              ReplyMessage: ReplyMessage
            }
          });
        case 9:
          result = _context3.sent;
          if (!(Object.keys(result).length > 0)) {
            _context3.next = 21;
            break;
          }
          EmailReceiver = result.EmailReceiver, data = (0, _objectWithoutProperties2["default"])(result, _excluded);
          TitleMessage = "Vũ Hồng Điệp Replly Email";
          mailEmail = (0, _sendEmail["default"])(EmailReceiver, TitleMessage, ReplyMessage);
          if (!mailEmail) {
            _context3.next = 18;
            break;
          }
          return _context3.abrupt("return", res.status(200).json({
            message: "Mail sent successfully"
          }));
        case 18:
          return _context3.abrupt("return", res.status(500).json({
            message: "Mail sent error"
          }));
        case 19:
          _context3.next = 22;
          break;
        case 21:
          return _context3.abrupt("return", res.status(500).json({
            message: "The system is maintenance"
          }));
        case 22:
          ;
          _context3.next = 28;
          break;
        case 25:
          _context3.prev = 25;
          _context3.t0 = _context3["catch"](0);
          return _context3.abrupt("return", res.status(500).json({
            message: "The system is maintenance"
          }));
        case 28:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 25]]);
  }));
  return function replyGmail(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var updateStatusMessage = exports.updateStatusMessage = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id, result;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          id = req.params.id;
          _context4.next = 4;
          return _message["default"].updateOne({
            _id: id
          }, {
            $set: {
              Status: 1
            }
          });
        case 4:
          result = _context4.sent;
          if (!(result.modifiedCount > 0)) {
            _context4.next = 9;
            break;
          }
          return _context4.abrupt("return", res.status(200).json({
            message: "Cập nhật trạng thái tin nhắn thành công"
          }));
        case 9:
          return _context4.abrupt("return", res.status(404).json({
            message: "Không tìm thấy tin nhắn để cập nhật"
          }));
        case 10:
          _context4.next = 15;
          break;
        case 12:
          _context4.prev = 12;
          _context4.t0 = _context4["catch"](0);
          return _context4.abrupt("return", res.status(500).json({
            message: "The system is maintenance"
          }));
        case 15:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 12]]);
  }));
  return function updateStatusMessage(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var deleteMessage = exports.deleteMessage = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id, result;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          id = req.params.id; // Giả sử message là một model mongoose
          _context5.next = 4;
          return _message["default"].findByIdAndDelete(id);
        case 4:
          result = _context5.sent;
          if (!result) {
            _context5.next = 9;
            break;
          }
          return _context5.abrupt("return", res.status(200).json({
            message: "Deleted email product successfully"
          }));
        case 9:
          return _context5.abrupt("return", res.status(400).json({
            message: "Delete email product failed"
          }));
        case 10:
          _context5.next = 16;
          break;
        case 12:
          _context5.prev = 12;
          _context5.t0 = _context5["catch"](0);
          console.log(_context5.t0);
          return _context5.abrupt("return", res.status(500).json({
            message: "The system is maintenance"
          }));
        case 16:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 12]]);
  }));
  return function deleteMessage(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();