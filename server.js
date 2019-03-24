const express = require('express');
const mysql = require('mysql');
const db = require('./db.js');

//bodyParser middleware so we can quickly get the body of the request
const bodyParser = require('body-parser');

const app = express();
const port = 8080;

const dbConnection = mysql.createConnection(db.dbSettings);

dbConnection.connect((err) => {
	if(err) {
		throw err;
	}
	console.log('connected');
});

app.get('/bugdrop/completed', function (req, res) { 
	var woo = dbConnection.query('SELECT * FROM level_test', function (err, result, fields) {
		if(err) {
			throw err;
		}
		res.send(result);
	});
});

app.use(bodyParser.json());

//Testing Curl request
//curl -X POST http://localhost:8080/bugdrop/completed -H "Content-type: application/json" -d '{"playerID": "123123","levelName":"Woo", "completionTime":"10.5", "collectables":"5", "attemptNum":"3"}'
app.post('/bugdrop/completed', function (req, res) { 
	console.log("Post request from: " + req.ip);

	const requestJson = req.body;
	//Check that the json request contains what we think it should
	if(
		requestJson.playerID != null &&
		requestJson.levelName != null &&
		requestJson.completionTime != null &&
		requestJson.collectables != null &&
		requestJson.attemptNum != null
	) {
		dbConnection.query(
			'INSERT INTO level_test SET playerID = ?, completionTime =  ?, collectables = ?, attemptNum = ?',
			[requestJson.playerID, requestJson.completionTime, requestJson.collectables, requestJson.attemptNum],
			function (error, results, fields) {
				if(error) throw error;
				
				console.log("Added with ID: " + results.insertId);
			}
		 );
		
		res.send("The server would like to thank you.\nResponse sent: " + new Date());
	}	
	else {
		res.send("Problem with your request. Missing fields");
	}
});

app.listen(port, () => console.log(`Example app listening on port ${port}`));
