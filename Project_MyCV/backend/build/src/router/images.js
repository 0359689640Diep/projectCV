"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _url = require("url");
var _path = _interopRequireWildcard(require("path"));
var _dotenv = _interopRequireDefault(require("dotenv"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
_dotenv["default"].config();
var routerImages = (0, _express.Router)();
var parentDirectory = "/home/courseid/MyCV_Nodejs/build/src/";
var imagePath = _path["default"].join(parentDirectory, "uploads/Images");
routerImages.get("/get-image/:imageName", function (req, res) {
  var imageName = req.params.imageName;

  // Thiết lập header Content-Disposition để trình duyệt tự động tải xuống tệp
  res.setHeader('Content-Disposition', "attachment; filename=\"".concat(imageName, "\""));
  res.sendFile(_path["default"].join(imagePath, imageName));
});
var _default = exports["default"] = routerImages;