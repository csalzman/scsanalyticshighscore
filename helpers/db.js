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

//At the moment these are the same. Keep them separate in case we need to adjust into the future
if(process.env.NODE_ENV == "production") {
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
