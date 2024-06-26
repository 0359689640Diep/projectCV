"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteUploadedImages = exports.deleteImage = void 0;
var _fs = _interopRequireDefault(require("fs"));
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
// Hàm để xóa các file ảnh đã tải lên
var deleteUploadedImages = exports.deleteUploadedImages = function deleteUploadedImages(files) {
  if (files) {
    for (var key in files) {
      files[key].forEach(function (file) {
        // Xóa file ảnh
        _fs["default"].unlink(file.path, function (err) {
          if (err) {
            console.error("Error deleting file:", err);
          }
        });
      });
    }
  }
};
var deleteImage = exports.deleteImage = function deleteImage(files) {
  if (files) {
    if (typeof files === 'string') {
      // Nếu files là một chuỗi
      var pathFile = "src/uploads/Images/" + files;
      _fs["default"].unlink(pathFile, function (err) {
        return err;
      });
    } else if (Array.isArray(files)) {
      // Nếu files là một mảng
      var _iterator = _createForOfIteratorHelper(files),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;
          var _pathFile = "src/uploads/Images/" + item;
          _fs["default"].unlink(_pathFile, function (err) {
            return err;
          });
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    } else {
      console.error("Invalid 'files' parameter.");
    }
  } else {
    console.error("No 'files' parameter provided.");
  }
};