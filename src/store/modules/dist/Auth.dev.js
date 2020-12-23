"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _AuthService = _interopRequireDefault(require("../../services/AuthService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var state = {
  user: {},
  error: ""
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
  loginUser: function loginUser(_ref, payload) {
    var commit, result;
    return regeneratorRuntime.async(function loginUser$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            commit = _ref.commit;
            _context.next = 3;
            return regeneratorRuntime.awrap(_AuthService["default"].login(payload)["catch"](function (error) {
              return console.log(error);
            }));

          case 3:
            result = _context.sent;
            commit("setUser", result);

          case 5:
          case "end":
            return _context.stop();
        }
      }
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