"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _skills = require("../controllers/skills.js");
var _checkPermission = require("../middleware/checkPermission.js");
var routerSkills = (0, _express.Router)();
routerSkills.get("/", _skills.getAllSkills);
routerSkills.post("/create", _checkPermission.checkPermisson, _skills.createSkills);
routerSkills["delete"]("/delete/:id", _checkPermission.checkPermisson, _skills.deleteSkills);
routerSkills.put("/update/:id", _checkPermission.checkPermisson, _skills.updateSkills);
var _default = exports["default"] = routerSkills;