var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (x, y) {
        if (isNaN(x) || isNaN(y))
            return 0;
        return x + y;
    };
    Calculator.prototype.substract = function (x, y) {
        if (isNaN(x) || isNaN(y))
            return 0;
        return x - y;
    };
    Calculator.prototype.euclid = function (x, y) {
        return y ? this.euclid(y, x % y) : x;
    };
    return Calculator;
}());
window.onload = function () {
    var $ = function (id) { return document.getElementById(id); };
    var calc = new Calculator();
    var num1 = $("num1");
    var num2 = $("num2");
    var output = $("result");
    $("add").addEventListener("click", function () { return add(parseInt(num1.value), parseInt(num2.value)); });
    $("substract").addEventListener("click", function () { return sub(parseInt(num1.value), parseInt(num2.value)); });
    $("gcd").addEventListener("click", function () { return euclid(parseInt(num1.value), parseInt(num2.value)); });
    function add(x, y) {
        output.innerHTML = calc.add(x, y).toString();
    }
    function sub(x, y) {
        output.innerHTML = calc.substract(x, y).toString();
    }
    function euclid(x, y) {
        output.innerHTML = calc.euclid(x, y).toString();
    }
};
