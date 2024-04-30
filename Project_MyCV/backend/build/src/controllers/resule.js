"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllResult = exports.getAll = exports.editResult = exports.deleteResul = exports.createResul = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _resule = _interopRequireDefault(require("../model/resule.js"));
var _resule2 = require("../validation/resule.js");
var _excluded = ["Type"],
  _excluded2 = ["Type"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var getAll = exports.getAll = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return _resule["default"].find();
        case 3:
          result = _context.sent;
          if (!(result.length === 0)) {
            _context.next = 6;
            break;
          }
          return _context.abrupt("return", res.status(404).json({
            message: "No data"
          }));
        case 6:
          return _context.abrupt("return", res.status(200).json({
            data: result
          }));
        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", res.status(500).json({
            message: "The system is under maintenance"
          }));
        case 12:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 9]]);
  }));
  return function getAll(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var createResul = exports.createResul = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body, Type, data, IdAccount, _resuleValidator$vali, error, errors;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _req$body = req.body, Type = _req$body.Type, data = (0, _objectWithoutProperties2["default"])(_req$body, _excluded);
          IdAccount = req.user._id;
          _resuleValidator$vali = _resule2.resuleValidator.validate(data, {
            abortEarly: false
          }), error = _resuleValidator$vali.error;
          if (!error) {
            _context2.next = 7;
            break;
          }
          errors = error.details.map(function (err) {
            return err.message;
          });
          return _context2.abrupt("return", res.status(400).json({
            message: errors[0]
          }));
        case 7:
          _context2.next = 9;
          return _resule["default"].create(_objectSpread({
            "IdAccount": IdAccount
          }, req.body));
        case 9:
          return _context2.abrupt("return", res.status(200).json({
            message: "Create a successful summary"
          }));
        case 12:
          _context2.prev = 12;
          _context2.t0 = _context2["catch"](0);
          return _context2.abrupt("return", res.status(500).json({
            message: "The system is maintenance"
          }));
        case 15:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 12]]);
  }));
  return function createResul(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var deleteResul = exports.deleteResul = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id, result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          id = req.params.id;
          _context3.next = 4;
          return _resule["default"].findByIdAndDelete({
            _id: Object(id)
          });
        case 4:
          result = _context3.sent;
          if (!(result !== null)) {
            _context3.next = 7;
            break;
          }
          return _context3.abrupt("return", res.status(200).json({
            message: "Resule deletion was successful"
          }));
        case 7:
          ;
          return _context3.abrupt("return", res.status(404).json({
            message: "The requested resule could not be found"
          }));
        case 11:
          _context3.prev = 11;
          _context3.t0 = _context3["catch"](0);
          return _context3.abrupt("return", res.status(500).json({
            message: "The system is maintenance"
          }));
        case 14:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 11]]);
  }));
  return function deleteResul(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var editResult = exports.editResult = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var _req$body2, Type, data, _resuleValidator$vali2, error, errors, id;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _req$body2 = req.body, Type = _req$body2.Type, data = (0, _objectWithoutProperties2["default"])(_req$body2, _excluded2);
          _resuleValidator$vali2 = _resule2.resuleValidator.validate(data, {
            abortEarly: false
          }), error = _resuleValidator$vali2.error;
          if (!error) {
            _context4.next = 6;
            break;
          }
          errors = error.details.map(function (err) {
            return err.message;
          });
          return _context4.abrupt("return", res.status(400).json({
            message: errors[0]
          }));
        case 6:
          id = req.params.id;
          _context4.next = 9;
          return _resule["default"].findByIdAndUpdate({
            _id: Object(id)
          }, _objectSpread({}, req.body));
        case 9:
          return _context4.abrupt("return", res.status(201).json({
            message: "Update successful"
          }));
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
  return function editResult(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var getAllResult = exports.getAllResult = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var type, result;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          type = req.params.type;
          _context5.next = 4;
          return _resule["default"].find({
            Type: type
          });
        case 4:
          result = _context5.sent;
          if (!(result.length === 0)) {
            _context5.next = 7;
            break;
          }
          return _context5.abrupt("return", res.status(404).json({
            message: "No data"
          }));
        case 7:
          return _context5.abrupt("return", res.status(200).json({
            data: result
          }));
        case 10:
          _context5.prev = 10;
          _context5.t0 = _context5["catch"](0);
          return _context5.abrupt("return", res.status(500).json({
            message: "The system is maintenance"
          }));
        case 13:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 10]]);
  }));
  return function getAllResult(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();