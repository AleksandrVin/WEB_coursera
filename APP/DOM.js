document.addEventListener("DOMContentLoaded", function(event) {


    function sayHello(event) {
        console.log(event);
        this.textContent = "Said it!"
        var name = document.getElementById("name").value;
        var message = "Hello " + name + "!";
        var content = document.getElementById("content");
        //content.textContent = message;
        content.innerHTML = "<h2>" + message + "</h2>";

        if (name == "student") {
            var title = document.getElementById("title");
            var title = document.querySelector("#title");
            title.textContent += " for student";
        }
    }

    //document.querySelector("button").addEventListener("click", sayHello);

    document.querySelector("button").onclick = sayHello;
    document.querySelector("body").addEventListener("mousemove",
        function(event) {
            if (event.shiftKey === true) {
                console.log("x: " + event.clientX);
                console.log("y: " + event.clientY);
            }
        }
    );

});
// loaded after content loaded