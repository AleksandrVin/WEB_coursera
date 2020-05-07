(function(window) {
    var AleksGreeter = {};
    AleksGreeter.name = "Aleks";
    AleksGreeter.sayHello = function() {
        console.log("Hello " + AleksGreeter.name);
    }
    window.AleksGreeter = AleksGreeter;
})(window);

(function(window) {
    var DadGreeter = {};
    DadGreeter.name = "Dad";
    var greeting = "Boungour ";
    DadGreeter.sayHello = function() {
        console.log(greeting + DadGreeter.name);
    }

    window.DadGreeter = DadGreeter;
})(window);