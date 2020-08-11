"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.XPButton = void 0;
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var styles = react_native_1.StyleSheet.create({
    container: {
        borderRadius: 5,
        backgroundColor: '#5B48A2',
        height: 40,
        fontSize: 16
    }
});
exports.XPButton = function () {
    return (<react_native_1.TouchableOpacity style={styles.container}>
      <react_native_1.Text>Hello, I'm a Button</react_native_1.Text>
    </react_native_1.TouchableOpacity>);
};
