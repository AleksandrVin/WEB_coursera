var x = "hello world";

// variables 

function compare(x, y) {
    return x < y;
}

var c = compare(4, 5);

console.log(c);

var message = "in global";
console.log("global: message = " + message);

var a = function() {
    var message = "inside a";
    console.log("a: message = " + message);

    function d() {
        console.log("b: message = " + message);
    }

    b();
    d();
};

function b() {
    console.log("b: message = " + message);
};

a();

// 7 built-in types

// object type <name, value>

// single value, immutable means read only

/*
object - type <name, value>

boolean - true or false
undefined
null - lack of value
number - numeric type ( double precision 64bit )
string - sequence of characters
symbol - "char" , released 2015 in ES6
*/

var y;

if (y == undefined) {
    console.log("x is undefined");
}

y = 5;

if (y != undefined) {
    console.log("x is defined");
}
console.log(y);

// undefined != not defined

var string = "Hello";
string += " World";
string = string + " World";
console.log(string + "!");

console.log((5 + 4) / 3);
console.log(undefined / 5); // NaN

function test1(a) {
    console.log(a / 5);
}
test1(10);

var x = 4,
    y = 4;

var x = "4";
var y = 4;
if (x == y) {
    console.log("x == y because of type conversion");
}

// strict equality 

if (x === y) {
    console.log("x === y");
} else {
    console.log("x !== y strict");
}

if (false || null || undefined || "" || 0 || NaN) {
    console.log("This line won't ever execute");
} else {
    console.log("all false");
}

if (true && "hello" && 1 && -1 && "false") {
    console.log("all true");
}

var sum = 0;
for (var i = 0; i < 10; i++) {
    sum = sum + i;
}
console.log("sum of 0 through 9 is: " + sum);

function orderChickenWith(sideDish) {
    sideDish = sideDish || "whatever"; // return what been before conversion 
    console.log("Chicken with + " + sideDish);
}

orderChickenWith("noodles");
orderChickenWith();