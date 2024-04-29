"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
var userSchema = new _mongoose["default"].Schema({
  Name: {
    type: String,
    required: true
  },
  Email: {
    type: String,
    required: true
  },
  Image: [{
    type: String
  }],
  Birthday: {
    type: String,
    required: true
  },
  Phone: [{
    type: String,
    required: true
  }],
  From: {
    type: String,
    required: true
  },
  Language: [{
    type: String,
    required: true
  }],
  Password: {
    type: String,
    required: true
  },
  Majors: {
    type: String,
    required: true
  },
  Job: [{
    type: String,
    required: true
  }],
  Maxim: {
    type: String,
    required: true
  },
  Describe: {
    type: String,
    required: true
  },
  CV: {
    type: String,
    required: true
  },
  IconLogo: {
    type: String,
    required: true
  },
  Logo: {
    type: String,
    required: true
  },
  Token: [{
    type: Object
  }]
}, {
  versionKey: false,
  timestamps: true
});
var _default = exports["default"] = _mongoose["default"].model("Account", userSchema);