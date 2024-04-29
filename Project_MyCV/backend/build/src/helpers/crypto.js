"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.encrypt = exports.decrypt = void 0;
var _cryptoJs = _interopRequireDefault(require("crypto-js"));
var _dotenv = _interopRequireDefault(require("dotenv"));
_dotenv["default"].config();
var secretKey = process.env.secretKey;
var decrypt = exports.decrypt = function decrypt(data) {
  try {
    var decryptedData = _cryptoJs["default"].AES.decrypt(data, secretKey).toString(_cryptoJs["default"].enc.Utf8);
    return decryptedData;
  } catch (error) {
    console.log(error);
    return false;
  }
};
var encrypt = exports.encrypt = function encrypt(data) {
  try {
    var encryptedData = _cryptoJs["default"].AES.encrypt(data, secretKey).toString();
    return encryptedData;
  } catch (error) {
    console.log(error);
    return false;
  }
};