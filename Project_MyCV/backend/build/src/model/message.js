"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
var messageSchema = new _mongoose["default"].Schema({
  IdAccount: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: "Account"
  },
  NameUserReceiver: {
    type: String,
    require: true
  },
  EmailReceiver: {
    type: String,
    require: true
  },
  TitleMessage: {
    type: String,
    require: true
  },
  Content: [{
    type: String,
    require: true
  }],
  ReplyMessage: {
    type: String
  },
  Status: {
    type: Number,
    "default": 0
  }
}, {
  versionKey: false,
  timestamps: true
});
var _default = exports["default"] = _mongoose["default"].model("Message", messageSchema);