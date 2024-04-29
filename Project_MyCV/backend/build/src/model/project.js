"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
var projectSchema = new _mongoose["default"].Schema({
  IdAccount: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: "Account"
  },
  Name: {
    type: String,
    require: true
  },
  Image: [{
    type: String,
    require: true
  }],
  Task: [{
    type: String,
    require: true
  }],
  Author: [{
    type: String,
    require: true
  }],
  Introduce: {
    type: String,
    require: true
  },
  Technology: [{
    type: String,
    require: true
  }],
  ObjectInProject: [{
    type: String,
    require: true
  }],
  LinkProject: {
    type: String,
    require: true
  }
}, {
  versionKey: false,
  timestamps: true
});
var _default = exports["default"] = _mongoose["default"].model("Project", projectSchema);