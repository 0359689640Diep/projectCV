"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resuleValidator = void 0;
var _joi = _interopRequireDefault(require("joi"));
var isDateBeforeNow = function isDateBeforeNow(value, helpers) {
  var currentDate = new Date();
  if (new Date(value) >= currentDate) {
    return helpers.message('The date must be before the current date');
  }
  return value;
};
var resuleValidator = exports.resuleValidator = _joi["default"].object({
  Name: _joi["default"].string().min(6).max(30).required().messages({
    "string.empty": "Name cannot be empty",
    "string.min": "Name must have at least {#limit} characters",
    "string.max": "Name must have at most {#limit} characters",
    "any.required": "Name is required"
  }),
  Degree: _joi["default"].string().min(6).max(255).required().messages({
    "string.empty": "Degree cannot be empty",
    "string.min": "Degree must have at least {#limit} characters",
    "string.max": "Degree must have at most {#limit} characters",
    "any.required": "Degree is required"
  }),
  Date: _joi["default"].string().required().messages({
    "string.empty": "Date cannot be empty",
    "any.required": "Date is required"
  }),
  SchoolName: _joi["default"].string().min(6).max(25).required().messages({
    "string.empty": "SchoolName cannot be empty",
    "string.min": "SchoolName must have at least {#limit} characters",
    "string.max": "SchoolName must have at most {#limit} characters",
    "any.required": "SchoolName is required"
  }),
  Describe: _joi["default"].string().min(6).max(255).required().messages({
    "string.empty": "Describe cannot be empty",
    "string.min": "Describe must have at least {#limit} characters",
    "string.max": "Describe must have at most {#limit} characters",
    "any.required": "Describe is required"
  })
});