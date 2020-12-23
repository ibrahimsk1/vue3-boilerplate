"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _LoggerService = _interopRequireDefault(require("../services/LoggerService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].config.errorHandler = function (err, vm, info) {
  console.log(err);

  _LoggerService["default"].saveLog({
    err: err,
    vm: vm,
    info: info
  });
};

window.onerror = function (message, source, lineNo, colNo, error) {
  console.log(err);

  _LoggerService["default"].saveLog({
    message: message,
    source: source,
    lineNo: lineNo,
    colNo: colNo,
    error: error
  });
};