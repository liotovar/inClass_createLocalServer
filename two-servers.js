var http = require("http");

var goodPORT = 7000;
var badPORT = 7500;

function handleRequest(request, response){
	response.end("You are awesome!!" + goodPORT);
}

function handelRequest2(request, response){
response.end("You are NOT awesome!!" + badPORT);
}

var server = http.createServer(handleRequest);
var server2 = http.createServer(handelRequest2);

server.listen(goodPORT, function() {
console.log("Server listening on: http://localhost" + goodPORT);
});

server2.listen(badPORT, function(){
	console.log("Server 2 listening on: http://localhost" + badPORT);
});