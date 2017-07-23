// Load the http module to create an http server.
var http = require('http');
var port = 8888;

// Configure our HTTP server to respond with HTTP 503 to all requests.
var server = http.createServer(function (request, response) {
  response.writeHead(503, {"Content-Type": "application/json"});
  response.end("{}");
});

// IP defaults to 127.0.0.1
server.listen(port);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:" + port + "/");
