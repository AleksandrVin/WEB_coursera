document.addEventListener("DOMContentLoaded",
    function(event) {
        document.querySelector("button")
            .addEventListener("click", function() {

                console.log("hi");

                $ajaxUtils.sendGetRequest("/name.json", function(request) {
                    document.querySelector("#content").innerHTML = "<h2>Hello " + request.name + "!</h2>";
                });
            });
    }
);