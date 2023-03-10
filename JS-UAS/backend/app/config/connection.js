var mysql = require('mysql');

function Connection() {
	this.pool = null;

	this.init = function() {
		this.pool = mysql.createPool({
			connectionLimit: 10,
			host: 'localhost',
			user: 'root',
			password: '',
			database: 'jadwal'
		});
	};

	this.acquire = function(callblack) {
		this.pool.getConnection(function(err, connection) {
			callblack(err, connection);
		});
	};
}

module.exports = new Connection();