"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
var skillsSchema = new _mongoose["default"].Schema({
  IdAccount: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: "Account"
  },
  TitleSkills: {
    type: String,
    required: true
  },
  ContentSkills: {
    type: String,
    required: true
  },
  Skills: [{
    _id: false,
    Name: {
      type: String,
      required: true
    },
    Percentage: {
      type: Number,
      required: true,
      "default": 0,
      min: 0,
      max: 100
    }
  }]
}, {
  versionKey: false,
  timestamps: true
});
var _default = exports["default"] = _mongoose["default"].model("Skills", skillsSchema);