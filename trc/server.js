var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// var config = require('./config');
var mongoose = require('mongoose');

var app = express();
app.use(express.static('./build'));
app.use(bodyParser.json());

var fewestGuesses;

app.get('/fewest-guesses', function(req,res){
	
	res.json({fewestGuesses});
	
	
});

app.post('/fewest-guesses', function(req,res){

		console.log(req.body);

	
	if (!fewestGuesses || (fewestGuesses > req.body.fewestGuesses)){
		fewestGuesses = req.body.fewestGuesses;
		
	}
	
	res.json({fewestGuesses});
	
});

app.listen(8080);