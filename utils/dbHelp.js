var mysql = require('mysql');


module.exports.Connection = () => {

	var conMySql = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '1234',
		database: 'unamonitoria'
		//port: 3306
	});
	
	return conMySql;
}
