"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _config = require("../constans/config");

var _default = function _default(to, from, next) {
  if (_config.isAuthActive) {
    next();
  } else {
    if (localStorage.getItem('user') != null && localStorage.getItem('user').length > 0) {
      next();
    } else {
      localStorage.removeItem('user');
      next('/Auth');
    }
  }
};

exports["default"] = _default;