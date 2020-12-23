"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = require("vue");

var _App = _interopRequireDefault(require("./App.vue"));

var _router = _interopRequireDefault(require("./router"));

var _index = _interopRequireDefault(require("./i18n/index"));

var _index2 = _interopRequireDefault(require("./store/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _vue.createApp)(_App["default"]);
app.use(_router["default"]);
app.use(_index["default"]);
app.use(_index2["default"]);
app.mount('#app');
var _default = app;
exports["default"] = _default;