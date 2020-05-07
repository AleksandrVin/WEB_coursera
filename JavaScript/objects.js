var company = new Object();
company.name = "Facebook";
console.log(company);
company.ceo = new Object();
company.ceo.firstName = "Mark";
company.ceo.favColor = "blue";

console.log(company);
console.log("company CEO name is: " + company.ceo.firstName); // dot notation 

console.log(company["name"]); // bracket notation

company["$stock of company"] = 110;

console.log("Stock price is: " + company["$stock of company"]);

var stockPropName = "$stock of company";
console.log("Stock price is: " + company[stockPropName]);

// lection 2(45) Better way: object literal;

var facebook = {
    name: "Facebook",
    ceo: {
        firstName: "Mark",
        favColor: "blue"
    },
    $stock: 110,
    "stock of company": 110
};

console.log(facebook.ceo.favColor);
console.log(facebook);

function multiply(x, y) {
    return x * y;
}

console.log(multiply(10, 10));
multiply.version = "v.1.0.0";
console.log(multiply.toString());
console.log(multiply.version);

function makeMultiplier(multiplier) {
    var myFunc = function(x) {
        return multiplier * x;
    };
    return myFunc;
}

var multiplyBy3 = makeMultiplier(3);
console.log(multiplyBy3(10));
var doubleAll = makeMultiplier(2);
console.log(doubleAll(100));

function doOperationOn(x, operation) {
    return operation(x);
}

console.log(doOperationOn(5, makeMultiplier(3)));
console.log(doOperationOn(5, doubleAll));

// primitives are copied by value
// objects copied by reference

function test() {
    console.log(this);
    this.myName = "alek";
    console.log("hello coursera!");
}

test();
console.log(window.myName);

// function constructors

function Circle(radius) { // big notation means "with constructor"
    this.radius = radius;
}

Circle.prototype.getArea = function() {
    return Math.PI * Math.pow(this.radius, 2);
};

var myCircle = new Circle(10); // do not forget new key word 
console.log(myCircle.getArea());


var literalCircle = { // new Object ()
    radius: 10,

    getArea: function() {
        var self = this;
        console.log(this);
        var increaseRadius = function() {
            self.radius = 20;
        };
        increaseRadius();
        console.log(this.radius);
        return Math.PI * Math.pow(this.radius, 2);
    }
};

literalCircle.getArea();
console.log(literalCircle.getArea());


var array = new Array();
array[0] = "alek";
array[1] = 2;
array[2] = function(name) {
    console.log("hello " + name);
};
array[3] = { course: " HTML, CSS & JS" };

console.log(array);
console.log(array[1]);
array[2]("alek");

var names = ["Yaakov", "John", "Joe"];
var names2 = [{
        name: "Alek"
    },
    {
        name: "John"
    },
    "Joe"
];
console.log(names);
console.log(names2);

for (var i = 0; i < names.length; i++) {
    console.log("Hello " + names[i]);
}

var myObj = {
    name: "Aleks",
    course: "HTML/CSS/JS",
    platform: "Coursera"
};

for (var prop in myObj) {
    console.log(prop + ": " + myObj[prop]);
}

for (var i in names2) {
    console.log("Hello " + names[i]);
}

names2[100] = "hello me";
names2.greeting = "Hi!";

for (var name in names2) {
    console.log("Hello " + names2[name]);
}


// Closures 
function makeMultiplier(multiplier) {

    function b() {
        console.log("Multiplier is: " + multiplier);
    }
    b();

    return (
        function(x) {
            return multiplier * x;
        }
    );
}

var doubleAll = makeMultiplier(2); // own execution content , local lexical environment 
console.log(doubleAll(10)); // its own exec env , because of closures