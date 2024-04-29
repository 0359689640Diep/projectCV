"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _dotenv = _interopRequireDefault(require("dotenv"));
var _account = require("../controllers/account.js");
var _image = require("../middleware/image.js");
var _checkPermission = require("../middleware/checkPermission.js");
_dotenv["default"].config();
var routerAccount = (0, _express.Router)();
routerAccount.post("/createAccount", _checkPermission.checkPermisson, _image.upload, _image.handleInvalidFile, _image.deleteUploadImg, _account.CreateAccount);
routerAccount.get("/getAllAccount", _checkPermission.checkPermisson, _account.getAccount);
routerAccount.get("/getAllAccountForClient", _account.getAccountForClient);
routerAccount.get("/:request", _account.getAccountByRequest);
routerAccount["delete"]("/deleteAccount/:id", _checkPermission.checkPermisson, _account.deleteAccount);
routerAccount.put("/updateAccount/:id", _checkPermission.checkPermisson, _image.upload, _image.handleInvalidFile, _image.deleteUploadImg, _account.updateAccount);
routerAccount.post("/sign-out", _account.signOut);
routerAccount.post("/signin", _account.signIn);
var _default = exports["default"] = routerAccount;