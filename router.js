function route(handle, pathname, response, completeData){
    console.log("A request will be routed for " + pathname);

    if (typeof handle[pathname] === 'function') {
        handle[pathname](response, completeData);
    }
    else {
        console.log("There is no handler for " + pathname);
        response.writeHead(404, {"Content-Type": "text/html"});
        response.write("404 Not found");
        response.end();
    }
}

exports.route = route;