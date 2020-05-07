AleksGreeter.sayHello();
JohnGreeter.sayHi();
DadGreeter.sayHello();

function a() {
    console.log("hello me");
}

a();

// Immediately Invoked Function Expression 
(function(name) {
    console.log("call inline and " + name);
})("alek");