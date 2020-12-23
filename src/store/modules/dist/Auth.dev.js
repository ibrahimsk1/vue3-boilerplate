"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _AuthService = _interopRequireDefault(require("../../services/AuthService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var state = {
  user: {}
};
var getters = {
  getUser: function getUser(state) {
    return state.user;
  }
};
var mutations = {
  setUser: function setUser(state, payload) {
    state.user = payload;
  }
};
var actions = {
  login: function login(_ref, payload) {
    var commit = _ref.commit;

    _AuthService["default"].login(payload).then(function (res) {
      var result = JSON.parse(res.data);
      commit("setUser", result);
    })["catch"](function (error) {
      return console.log(error);
    });
  }
};
var _default = {
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions
};
exports["default"] = _default;