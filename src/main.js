"use strict";
exports.__esModule = true;
function factorial(n) {
    return n <= 1 ? n * factorial(n - 1) : 1;
}
var res = factorial(5);
var Container = (function () {
    function Container(operation) {
        this.operation = operation;
    }
    Container.prototype.doOperation = function (a, b) {
        return this.operation.invoke(a, b);
    };
    return Container;
}());
exports.Container = Container;
var Minus = (function () {
    function Minus() {
    }
    return Minus;
}());
var c = new Container(new );
