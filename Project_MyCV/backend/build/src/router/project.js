"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _project = require("../controllers/project.js");
var _image = require("../middleware/image.js");
var _checkPermission = require("../middleware/checkPermission.js");
var routerProject = (0, _express.Router)();
routerProject.get("/", _project.getAll);
routerProject.post("/create", _checkPermission.checkPermisson, _image.upload, _image.handleInvalidFile, _image.deleteUploadImg, _project.create);
routerProject.put("/update/:id", _checkPermission.checkPermisson, _image.upload, _image.handleInvalidFile, _image.deleteUploadImg, _project.update);
routerProject["delete"]("/delete/:id", _checkPermission.checkPermisson, _project.remove);
var _default = exports["default"] = routerProject;