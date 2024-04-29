"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.update = exports.remove = exports.getAll = exports.create = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _image = require("../helpers/image.js");
var _project = _interopRequireDefault(require("../model/project.js"));
var _project2 = require("../validation/project.js");
var _excluded = ["Image"],
  _excluded2 = ["Author", "Technology", "ObjectInProject", "Task"],
  _excluded3 = ["Author", "Technology", "ObjectInProject", "Task"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
_dotenv["default"].config();
var baseUrl = process.env.baseUrl;
var update = exports.update = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, Image, data, Author, Technology, ObjectInProject, Task, dataObject, _projectValidator$val, error, errors, id, newData, imageByIdProduct, _Image;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, Image = _req$body.Image, data = (0, _objectWithoutProperties2["default"])(_req$body, _excluded);
          Author = data.Author, Technology = data.Technology, ObjectInProject = data.ObjectInProject, Task = data.Task, dataObject = (0, _objectWithoutProperties2["default"])(data, _excluded2);
          _projectValidator$val = _project2.projectValidator.validate(data, {
            abortEarly: false
          }), error = _projectValidator$val.error;
          if (!error) {
            _context.next = 8;
            break;
          }
          // Nếu có lỗi, xóa các file ảnh đã được tải lên
          (0, _image.deleteUploadedImages)(req.files);
          errors = error.details.map(function (err) {
            return err.message;
          });
          return _context.abrupt("return", res.status(400).json({
            message: errors[0]
          }));
        case 8:
          id = req.params.id;
          newData = _objectSpread(_objectSpread({}, dataObject), {}, {
            Task: Task.split(","),
            Technology: Technology.split(","),
            Author: Author.split(","),
            ObjectInProject: ObjectInProject.split(",")
          }); // kiem tra xem anh co duoc up len hay khong
          if (!(Object.keys(req.files).length > 0)) {
            _context.next = 16;
            break;
          }
          _context.next = 13;
          return _project["default"].findById({
            _id: Object(id)
          }, {
            Image: 1
          });
        case 13:
          imageByIdProduct = _context.sent;
          // neu Image khong trống  thì  
          _Image = req.files.Image;
          if (_Image && _Image !== undefined) {
            // lấy ảnh mới
            newData["Image"] = _Image.map(function (file) {
              return file.filename;
            });
            // xoa anh cu
            (0, _image.deleteImage)(imageByIdProduct.Image);
          }
        case 16:
          _context.next = 18;
          return _project["default"].findByIdAndUpdate(id, _objectSpread({}, newData));
        case 18:
          return _context.abrupt("return", res.status(200).json({
            message: "Update project success"
          }));
        case 21:
          _context.prev = 21;
          _context.t0 = _context["catch"](0);
          (0, _image.deleteUploadedImages)(req.files);
          return _context.abrupt("return", res.status(500).json({
            message: "The system is maintenance"
          }));
        case 25:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 21]]);
  }));
  return function update(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var create = exports.create = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _projectValidator$val2, error, errors, Images, _req$body2, Author, Technology, ObjectInProject, Task, data, ObjectInProjectArr, AuthorArr, TechnologyArr, TaskArr;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _projectValidator$val2 = _project2.projectValidator.validate(req.body, {
            abortEarly: false
          }), error = _projectValidator$val2.error;
          if (!error) {
            _context2.next = 6;
            break;
          }
          // Nếu có lỗi, xóa các file ảnh đã được tải lên
          (0, _image.deleteUploadedImages)(req.files);
          errors = error.details.map(function (err) {
            return err.message;
          });
          return _context2.abrupt("return", res.status(400).json({
            message: errors[0]
          }));
        case 6:
          if (!(req.files && req.files.Image && req.files.Image.length < 0)) {
            _context2.next = 8;
            break;
          }
          return _context2.abrupt("return", res.status(404).json({
            message: "Image cannot be empty"
          }));
        case 8:
          Images = req.files.Image.map(function (file) {
            return file.filename;
          });
          _req$body2 = req.body, Author = _req$body2.Author, Technology = _req$body2.Technology, ObjectInProject = _req$body2.ObjectInProject, Task = _req$body2.Task, data = (0, _objectWithoutProperties2["default"])(_req$body2, _excluded3);
          ObjectInProjectArr = ObjectInProject.split(",");
          AuthorArr = Author.split(",");
          TechnologyArr = Technology.split(",");
          TaskArr = Task.split(",");
          _context2.next = 16;
          return _project["default"].create(_objectSpread(_objectSpread({}, data), {}, {
            Task: TaskArr,
            Technology: TechnologyArr,
            Author: AuthorArr,
            ObjectInProject: ObjectInProjectArr,
            Image: Images
          }));
        case 16:
          return _context2.abrupt("return", res.status(200).json({
            message: "Create project success"
          }));
        case 19:
          _context2.prev = 19;
          _context2.t0 = _context2["catch"](0);
          (0, _image.deleteUploadedImages)(req.files);
          return _context2.abrupt("return", res.status(500).json({
            message: "The system is maintenance"
          }));
        case 23:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 19]]);
  }));
  return function create(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var remove = exports.remove = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id, result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          id = req.params.id;
          _context3.next = 4;
          return _project["default"].findOneAndDelete({
            _id: Object(id)
          });
        case 4:
          result = _context3.sent;
          if (!(result !== null)) {
            _context3.next = 8;
            break;
          }
          (0, _image.deleteImage)(result.Image);
          return _context3.abrupt("return", res.status(200).json({
            message: "Delete project successful"
          }));
        case 8:
          return _context3.abrupt("return", res.status(404).json({
            message: "The requested project could not be found"
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
  return function remove(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var getAll = exports.getAll = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var result;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return _project["default"].find();
        case 3:
          result = _context4.sent;
          if (!(result.length === 0)) {
            _context4.next = 6;
            break;
          }
          return _context4.abrupt("return", res.status(404).json({
            message: "No Project"
          }));
        case 6:
          result.forEach(function (obj) {
            obj.Image.forEach(function (filed, key) {
              obj.Image[key] = baseUrl + filed;
            });
          });
          return _context4.abrupt("return", res.status(200).json({
            data: result
          }));
        case 10:
          _context4.prev = 10;
          _context4.t0 = _context4["catch"](0);
          return _context4.abrupt("return", res.status(500).json({
            message: "The system is maintenance"
          }));
        case 13:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 10]]);
  }));
  return function getAll(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();