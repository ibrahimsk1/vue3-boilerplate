"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vueRouter = require("vue-router");

var _AuthRequired = _interopRequireDefault(require("./utils/AuthRequired"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var routes = [{
  path: "/",
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require("./Views/Home"));
    });
  },
  redirect: "/Home",
  beforeEnter: _AuthRequired["default"]
}, {
  path: "/Home",
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require("./Views/Home"));
    });
  },
  redirect: "/Home/Home",
  children: [{
    path: "Home",
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require("./Views/Home/Home"));
      });
    }
  }]
}, {
  path: "/Auth",
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require("./Views/Auth"));
    });
  },
  redirect: "/Views/Auth",
  children: [{
    path: "Auth",
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require("./Views/Auth/Login"));
      });
    }
  }]
}, {
  path: "/:catchAll(.*)",
  name: "NotFound",
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require("./Views/Error/NotFound"));
    });
  }
}];
var router = (0, _vueRouter.createRouter)({
  history: (0, _vueRouter.createWebHistory)(),
  routes: routes
});
var _default = router;
exports["default"] = _default;