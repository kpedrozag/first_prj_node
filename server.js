var http = require('http');
var url = require('url');

function start_server(route, handle){
    function onRequest(request, response){
        var completeData = "";
        var pathname = url.parse(request.url).pathname;
        console.log("\nRequest received for URL: " + pathname);

        request.setEncoding('utf-8');
        
        request.addListener("data",
            function (chunk) {
                completeData += chunk;
                console.log("Chunk received on POST: " + chunk);
        });

        request.addListener('end',
            function () {
                route(handle, pathname, response, completeData);
            });
    }
    http.createServer(onRequest).listen(8888);
    console.log("Server started");
}

exports.start_server = start_server;