var mysql = require('mysql');


module.exports.Teste = () => {

	var conMySql = mysql.createConnection({
		host: process.env.serverMonitor,
		user: process.env.userMonitor,
		password: process.env.passMonitor,
		database: 'unamonitoria',
		port: 41890
	});
	
	return conMySql;
}
