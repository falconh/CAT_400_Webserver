
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var serverPort = 8000 ;
var mysql = require('mysql');
var connection = mysql.createConnection(
	{
		host		: 'localhost',
		user 		: 'root',
		password	: 'falcon',
		database	: 'pleasantjourney'
	});

   app.use(
        "/", //the URL throught which you want to access to you static content
        express.static(__dirname) //where your static content is located in your filesystem
    );

server.listen(serverPort);
console.log("Server listening at port " + serverPort);
connection.connect();

app.get('/register/journey', function(req, res) {

  var plat_number = req.param('platno');
  var destination = req.param('destination');
  var destinationCoord = req.param('dcoord');
  //var isReachedDestination = req.param('isreach'); 

  var selectIDQuery = "SELECT MAX(Journey_ID) AS MAXIMUM FROM journey";

  var registerQuery = "INSERT INTO journey(Journey_ID, Plat_Number, Destination, DestinationCoord, isReachedDestination) VALUES(?,?,?,?,0)" ;

  getMaxID(selectIDQuery,function(err,data){
  	if(err) {
  		throw err;
  	}else{
  		var journeyID = ++data;
  		connection.query(registerQuery, [journeyID,plat_number,destination,destinationCoord], function(err,result){
		  	if(err)
		  		throw err;

		  });

  		res.type('application/JSON')	
  		res.send(JSON.stringify({journeyid: journeyID}));
  	}

  });
  
});

function getMaxID(query, callback){
	connection.query(query, function(err, result){
  	if(err)
  		callback(err,null);
  	else{
  		callback(null, result[0].MAXIMUM);
  	}

  });
}


var fsWrite = require("fs")
var fs = require('fs');


