
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var serverPort = 8000 ;

   app.use(
        "/", //the URL throught which you want to access to you static content
        express.static(__dirname) //where your static content is located in your filesystem
    );

server.listen(serverPort);
console.log("Server listening at port " + serverPort);





var fsWrite = require("fs")
var fs = require('fs');


