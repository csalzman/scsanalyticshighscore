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

app.get('/', function (req, res) { 
	var woo = dbConnection.query('SELECT * FROM level_test', function(err, result, fields) {
		if(err) {
			throw err;
		}
		console.log(result);
		res.send(result);
	});
});

app.use(bodyParser.json());

//Testing Curl request
// curl -X POST http://localhost:8080/bugdrop/completed -H "Content-type: application/json" -d '{"woo":"1"}'
app.post('/bugdrop/completed', function (req, res) { 
	console.log("Post request from: " + req.ip);
	console.log(req.body);
	
	res.send("The server would like to thank you.\nResponse sent: " + new Date());
});

app.listen(port, () => console.log(`Example app listening on port ${port}`));
