"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _message = require("../controllers/message.js");
var _checkPermission = require("../middleware/checkPermission.js");
var routerMessage = (0, _express.Router)();
routerMessage.post("/sendmessage", _message.sendMessage);
routerMessage.put("/reply-email/:id", _checkPermission.checkPermisson, _message.replyGmail);
routerMessage.post("/updatestatusmessage/:id", _checkPermission.checkPermisson, _message.updateStatusMessage);
routerMessage.get("/getemail", _checkPermission.checkPermisson, _message.getMessage);
routerMessage.put("/sendemail", _checkPermission.checkPermisson, _message.replyGmail);
routerMessage["delete"]("/deleteemail/:id", _checkPermission.checkPermisson, _message.deleteMessage);
var _default = exports["default"] = routerMessage;