"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
exports.default = (function () {
    var isClient = typeof window === "object";
    var getSize = function () {
        return {
            width: isClient ? window.innerWidth : undefined,
            height: isClient ? window.innerHeight : undefined
        };
    };
    var _a = react_1.useState(getSize), windowSize = _a[0], setWindowSize = _a[1];
    react_1.useEffect(function () {
        if (!isClient) {
            return false;
        }
        var handleResize = function () {
            setWindowSize(getSize());
        };
        window.addEventListener("resize", handleResize);
        return function () { return window.removeEventListener("resize", handleResize); };
    }, []);
    return windowSize;
});
