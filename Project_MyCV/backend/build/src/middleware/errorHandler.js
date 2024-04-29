"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var errorHandler = function errorHandler(err, req, res, next) {
  res.status(415).json({
    error: err.message
  });
};
var _default = exports["default"] = errorHandler;