"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
exports.default = (function (callback, value) {
    var isClient = typeof window === "object";
    var _a = react_1.useState(0), percentage = _a[0], setPercentage = _a[1];
    react_1.useEffect(function () {
        if (!isClient) {
            return false;
        }
        var handleScroll = function () {
            var percentage = Math.round((window.scrollY * 100) / document.documentElement.scrollHeight);
            setPercentage(percentage);
            if (percentage === value && callback)
                callback();
        };
        window.addEventListener("scroll", handleScroll);
        return function () { return window.removeEventListener("scroll", handleScroll); };
    }, []);
    return percentage;
});
