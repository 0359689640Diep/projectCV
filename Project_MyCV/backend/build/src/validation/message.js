"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendMessageValidator = exports.replyMessageValidator = void 0;
var _joi = _interopRequireDefault(require("joi"));
var sendMessageValidator = exports.sendMessageValidator = _joi["default"].object({
  NameUserReceiver: _joi["default"].string().min(6).max(255).required().messages({
    "string.empty": "Your Name cannot be empty",
    "string.min": "Your Name must have at least {#limit} characters",
    "string.max": "Your Name must have at most {#limit} characters",
    "any.required": "Your Name is required"
  }),
  EmailReceiver: _joi["default"].string().email().required().messages({
    "string.email": "Your Email is not in correct format"
  }),
  TitleMessage: _joi["default"].string().min(6).max(255).required().messages({
    "string.empty": "Your Subject cannot be empty",
    "string.min": "Your Subject must have at least {#limit} characters",
    "string.max": "Your Subject must have at most {#limit} characters",
    "any.required": "Your Subject is required"
  }),
  Content: _joi["default"].string().min(3).max(255).messages({
    "string.empty": "Your Message cannot be empty",
    "string.min": "Your Message must have at least {#limit} characters",
    "string.max": "Your Message must have at most {#limit} characters",
    "any.required": "Your Message is required"
  })
});
var replyMessageValidator = exports.replyMessageValidator = _joi["default"].object({
  ReplyMessage: _joi["default"].string().min(3).max(255).messages({
    "string.min": "Your Content must have at least {#limit} characters",
    "string.max": "Your Content must have at most {#limit} characters",
    "any.required": "Your Content is required"
  })
});