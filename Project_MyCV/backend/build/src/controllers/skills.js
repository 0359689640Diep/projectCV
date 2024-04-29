"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateSkills = exports.getAllSkills = exports.deleteSkills = exports.createSkills = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _skills = _interopRequireDefault(require("../model/skills.js"));
var _skills2 = require("../validation/skills.js");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var createSkills = exports.createSkills = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _skillsValidator$vali, error, errors;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _skillsValidator$vali = _skills2.skillsValidator.validate(req.body, {
            abortEarly: false
          }), error = _skillsValidator$vali.error;
          if (!error) {
            _context.next = 5;
            break;
          }
          errors = error.details.map(function (err) {
            return err.message;
          });
          return _context.abrupt("return", res.status(400).json({
            message: errors[0]
          }));
        case 5:
          _context.next = 7;
          return _skills["default"].create(req.body);
        case 7:
          return _context.abrupt("return", res.status(200).json({
            message: "Create Skills successful"
          }));
        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
          return _context.abrupt("return", res.status(500).json({
            message: "The system is maintenance"
          }));
        case 14:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 10]]);
  }));
  return function createSkills(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var getAllSkills = exports.getAllSkills = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var resultGetAllSkills;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return _skills["default"].find();
        case 3:
          resultGetAllSkills = _context2.sent;
          if (!(resultGetAllSkills.length === 0)) {
            _context2.next = 6;
            break;
          }
          return _context2.abrupt("return", res.status(404).json({
            message: "Not data"
          }));
        case 6:
          return _context2.abrupt("return", res.status(200).json({
            data: resultGetAllSkills
          }));
        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);
          return _context2.abrupt("return", res.status(500).json({
            message: "The system main temp"
          }));
        case 13:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 9]]);
  }));
  return function getAllSkills(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var deleteSkills = exports.deleteSkills = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id, result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          id = req.params.id;
          _context3.next = 4;
          return _skills["default"].findByIdAndDelete({
            _id: Object(id)
          });
        case 4:
          result = _context3.sent;
          if (!(result !== null)) {
            _context3.next = 7;
            break;
          }
          return _context3.abrupt("return", res.status(200).json({
            message: "Delete skills successful"
          }));
        case 7:
          return _context3.abrupt("return", res.status(404).json({
            message: "The requested skills could not be found"
          }));
        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](0);
          return _context3.abrupt("return", res.status(500).json({
            message: "The system is maintenance"
          }));
        case 13:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 10]]);
  }));
  return function deleteSkills(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var updateSkills = exports.updateSkills = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id, _skillsValidator$vali2, error, errors;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          id = req.params.id;
          _skillsValidator$vali2 = _skills2.skillsValidator.validate(req.body, {
            abortEarly: false
          }), error = _skillsValidator$vali2.error;
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
          _context4.next = 8;
          return _skills["default"].findByIdAndUpdate({
            _id: Object(id)
          }, _objectSpread({}, req.body));
        case 8:
          return _context4.abrupt("return", res.status(201).json({
            message: "Update skills successful"
          }));
        case 11:
          _context4.prev = 11;
          _context4.t0 = _context4["catch"](0);
          return _context4.abrupt("return", res.status(500).json({
            message: "The system is maintenance"
          }));
        case 14:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 11]]);
  }));
  return function updateSkills(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();