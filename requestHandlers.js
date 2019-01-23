var exec = require('child_process').exec;
var querystring = require('querystring');

function start(response, dataComplete) {
    console.log("Request handler for 'start'");

    var body = require('./body_file').body;

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();

}

function upload(response, dataComplete) {
    console.log("Request handler for 'upload'");
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("Your information: " +
        querystring.parse(dataComplete)['text']);
    response.end();
}

exports.start = start;
exports.upload = upload;