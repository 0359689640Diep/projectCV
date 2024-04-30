"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.skillsValidator = void 0;
var _joi = _interopRequireDefault(require("joi"));
var skillsValidator = exports.skillsValidator = _joi["default"].object({
  TitleSkills: _joi["default"].string().min(6).max(255).required().messages({
    "string.empty": "Title Skills cannot be empty",
    "string.min": "Title Skills must have at least {#limit} characters",
    "string.max": "Title Skills must have at most {#limit} characters",
    "any.required": "Title Skills is required"
  }),
  ContentSkills: _joi["default"].string().min(6).max(255).required().messages({
    "string.empty": "Content Skills cannot be empty",
    "string.min": "Content Skills must have at least {#limit} characters",
    "string.max": "Content Skills must have at most {#limit} characters",
    "any.required": "Content Skills is required"
  }),
  Skills: _joi["default"].array().items(_joi["default"].object({
    Name: _joi["default"].string().min(3).max(255).required().messages({
      "string.empty": "Name skills cannot be empty",
      "string.min": "Name skills must have at least {#limit} characters",
      "string.max": "Name skills must have at most {#limit} characters",
      "any.required": "Name skills is required"
    }),
    Percentage: _joi["default"].number().integer().min(0).max(100).required().messages({
      "number.base": "Percentage must be a number",
      "number.integer": "Percentage must be an integer",
      "number.min": "Percentage must be at least {#limit}",
      "number.max": "Percentage must be at most {#limit}",
      "any.required": "Percentage is required"
    })
  }))
});