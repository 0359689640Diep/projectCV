"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
var resuleSchema = new _mongoose["default"].Schema({
  IdAccount: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: "Account"
  },
  Name: {
    type: String,
    required: true
  },
  Degree: {
    type: String,
    required: true
  },
  Date: {
    type: String,
    required: true
  },
  SchoolName: {
    type: String,
    required: true
  },
  Describe: {
    type: String,
    required: true
  },
  Type: {
    type: Number,
    "default": 0
  }
}, {
  versionKey: false,
  timestamps: true
});
var _default = exports["default"] = _mongoose["default"].model("Resule", resuleSchema);