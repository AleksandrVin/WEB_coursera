(function(window) {
    var JohnGreeter = {};
    JohnGreeter.name = "John";
    JohnGreeter.sayHi = function() {
        console.log("Hi " + JohnGreeter.name);
    }
    window.JohnGreeter = JohnGreeter;
})(window);

// IIFEs