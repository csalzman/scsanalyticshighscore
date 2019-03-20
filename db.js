var exports = module.exports = {};

if(process.env.NODE_ENV == "local") {
	exports.dbSettings = { 
		host: 'localhost',
		user: process.env.DBUSERNAME,
		password: process.env.PASSWORD, 
		database: process.env.DATABASE 
	};
}
