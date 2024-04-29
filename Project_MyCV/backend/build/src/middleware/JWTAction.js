"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyToken = exports.createJWT = void 0;
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _dotenv = require("dotenv");
(0, _dotenv.config)();
var secretKey = process.env.secretKey;
var createJWT = exports.createJWT = function createJWT(data) {
  try {
    var token = _jsonwebtoken["default"].sign(data, secretKey, {
      expiresIn: "1d"
    });
    return token;
  } catch (error) {
    console.log(error);
  }
};
var verifyToken = exports.verifyToken = function verifyToken(token) {
  try {
    var decoded = _jsonwebtoken["default"].verify(token, secretKey);
    return decoded;
  } catch (error) {
    return false;
  }
};