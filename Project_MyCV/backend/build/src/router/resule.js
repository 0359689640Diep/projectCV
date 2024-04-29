"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _resule = require("../controllers/resule.js");
var _checkPermission = require("../middleware/checkPermission.js");
var routerResul = (0, _express.Router)();
routerResul.get("/:type", _resule.getAllResult);
routerResul.get("/", _resule.getAll);
routerResul.post("/create", _checkPermission.checkPermisson, _resule.createResul);
routerResul["delete"]("/delete/:id", _checkPermission.checkPermisson, _resule.deleteResul);
routerResul.put("/update/:id", _checkPermission.checkPermisson, _resule.editResult);
var _default = exports["default"] = routerResul;