// booleand
var a = true;
//number
var i = 1;
var hex = 0xf00d;
var binary = 10;
//string
var firtsName = 'Evgen';
var age = 30;
var result = "My name is " + firtsName + " and I " + (age + 1) + " years old";
console.log(result);
//arays
var list1 = [1, 2, 3];
var list2 = list1;
//tuple
var tuple1 = ['1', 2];
tuple1[2] = '2';
tuple1[3] = 3;
//enums
var Color;
(function (Color) {
    Color[Color["Red"] = 2] = "Red";
    Color[Color["Blue"] = 3] = "Blue";
    Color[Color["Green"] = 4] = "Green";
})(Color || (Color = {}));
var color1 = Color.Red;
var colorName = Color[2];
//any
var notSure = 2;
notSure = false;
notSure = {};
notSure = function (d) { };
notSure.ifExists();
var listAny = [1, 'One', Color.Blue, function () { }];
//void
function debug(a) {
    console.log(a);
}
var unusuble = null;
unusuble = undefined;
//never
function throwError(a) {
    throw a;
}
function foreverCycle() {
    while (true) { }
}
//assertions
var shouldBeDigit = 1;
var digit = shouldBeDigit;
var digit2 = shouldBeDigit;
