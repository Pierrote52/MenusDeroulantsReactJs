"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Selector(props) {
  return /*#__PURE__*/_react.default.createElement("select", {
    name: "Departement",
    onChange: e => {
      props.result(e.target.value);
    }
  }, props.options.map(element => {
    return /*#__PURE__*/_react.default.createElement("option", {
      key: element.value,
      value: element.value
    }, element.name);
  }));
}

var _default = Selector;
exports.default = _default;