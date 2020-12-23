"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vuex = require("vuex");

var _i18n = _interopRequireDefault(require("./modules/i18n"));

var _Auth = _interopRequireDefault(require("./modules/Auth"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var store = (0, _vuex.createStore)({
  modules: {
    i18n: _i18n["default"],
    Auth: _Auth["default"]
  }
});
var _default = store;
exports["default"] = _default;