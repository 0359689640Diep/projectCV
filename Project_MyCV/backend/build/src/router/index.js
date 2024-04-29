"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _account = _interopRequireDefault(require("./account.js"));
var _message = _interopRequireDefault(require("./message.js"));
var _images = _interopRequireDefault(require("./images.js"));
var _resule = _interopRequireDefault(require("./resule.js"));
var _skills = _interopRequireDefault(require("./skills.js"));
var _project = _interopRequireDefault(require("./project.js"));
var router = (0, _express.Router)();
router.use("/account", _account["default"]);
router.use("/message", _message["default"]);
router.use("/image", _images["default"]);
router.use("/result", _resule["default"]);
router.use("/skills", _skills["default"]);
router.use("/project", _project["default"]);
var _default = exports["default"] = router;