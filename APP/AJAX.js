(function(global) {

    var ajaxUtils = {};

    function getRequestObject() {
        if (window.XMLHttpRequest) {
            return (new XMLHttpRequest());
        } else {
            global.alert("Ajax is not supported!");
            return (null);
        }
    };

    ajaxUtils.sendGetRequest =
        function(requestUrl, responseHandler, isJson) {
            var request = getRequestObject();
            request.onreadystatechange = function() {
                handlerResponse(request, responseHandler, isJson);
            };
            request.open("GET", requestUrl, true); // false for freeze 
            request.send(null); // for post
        };

    function handlerResponse(request, responseHandler, isJson) {
        if (request.status == 200 && request.readyState == 4) {
            if (isJson == undefined) {
                isJson = true;
            }
            if (isJson) {
                responseHandler(JSON.parse(request.responseText));
            } else {
                responseHandler(request);
            }
        }
    };

    global.$ajaxUtils = ajaxUtils;

})(window);