var mysql = require('mysql');


module.exports.Connection = () => {

	var conMySql = mysql.createConnection({
		// host: process.env.serverMonitor,
		// user: process.env.userMonitor,
		// password: process.env.passMonitor,
		// database: 'unamonitoria',
		// port: 41890
		host: 'localhost',
		user: 'root',
		password: '1234',
		database: 'unamonitoria'
	});
	
	return conMySql;
}
