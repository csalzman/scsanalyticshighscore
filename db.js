//Database setup
const mysql = require('mysql');

//Local testing env variables. Set with .direnv
if(process.env.NODE_ENV == "local") {
	dbSettings = { 
		host: 'localhost',
		user: process.env.DBUSERNAME,
		password: process.env.PASSWORD, 
		database: process.env.DATABASE 
	};
}

//Create connection
const dbConnection = mysql.createConnection(dbSettings);

//Check for error
dbConnection.connect((err) => {
	if(err) throw err;
	console.log('connected to database: ' + process.env.DATABASE);
});

//Export connection
module.exports = dbConnection;