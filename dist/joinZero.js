"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.joinZero = joinZero;
function joinZero(value, length) {
    return (Array(length).join("0") + value.toString(10)).slice(length * -1);
}
//# sourceMappingURL=joinZero.js.map