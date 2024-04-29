"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.projectValidator = void 0;
var _joi = _interopRequireDefault(require("joi"));
var projectValidator = exports.projectValidator = _joi["default"].object({
  Name: _joi["default"].string().min(3).max(255).required().messages({
    "string.empty": "Name cannot be empty",
    "string.min": "Name must have at least {#limit} characters",
    "string.max": "Name must have at most {#limit} characters",
    "any.required": "Name is required"
  }),
  Author: _joi["default"].string().min(3).max(255).required().messages({
    "string.empty": "Author cannot be empty",
    "string.min": "Author must have at least {#limit} characters",
    "string.max": "Author must have at most {#limit} characters",
    "any.required": "Author is required"
  }),
  Introduce: _joi["default"].string().min(8).max(255).required().messages({
    "string.empty": "Introduce cannot be empty",
    "string.min": "Introduce must have at least {#limit} characters",
    "string.max": "Introduce must have at most {#limit} characters",
    "any.required": "Introduce is required"
  }),
  Task: _joi["default"].string().min(3).max(255).required().messages({
    "string.empty": "Task cannot be empty",
    "string.min": "Task must have at least {#limit} characters",
    "string.max": "Task must have at most {#limit} characters",
    "any.required": "Task is required"
  }),
  Technology: _joi["default"].string().min(3).max(255).required().messages({
    "string.empty": "Technology cannot be empty",
    "string.min": "Technology must have at least {#limit} characters",
    "string.max": "Technology must have at most {#limit} characters",
    "any.required": "Technology is required"
  }),
  ObjectInProject: _joi["default"].string().min(8).max(255).required().messages({
    "string.empty": "Object In Project cannot be empty",
    "string.min": "Object In Project must have at least {#limit} characters",
    "string.max": "Object In Project must have at most {#limit} characters",
    "any.required": "Object In Project is required"
  }),
  LinkProject: _joi["default"].string().min(8).max(255).required().messages({
    "string.empty": "Link Project cannot be empty",
    "string.min": "Link Project must have at least {#limit} characters",
    "string.max": "Link Project must have at most {#limit} characters",
    "any.required": "Link Project is required"
  })
});