var connection = require ('../config/connection');

function Todo() {
	this.get = function(res) {
		connection.acquire(function(err,con) {
			con.query('select * from jadwal', function(err,result) {
				con.release();
				res.send(result);
				console.log("Get successful");
			});
		});
	};

	this.getByID = function(id,res) {
		connection.acquire(function(err,con) {
			con.query('select * from jadwal where id = ?', id, function(err, result) {
				con.release();
				res.send(result);
				console.log("Get by ID successful");
			});
		});
	};

	this.create = function(jadwal,res) {
		connection.acquire(function(err,con) {
			con.query('insert into jadwal set ?', jadwal, function(err,result) {
				con.release();
				if (err) {
					res.send({status:1, massage:'JADWAL creation fail'});
				}else{
					res.send({status:0, massage:'JADWAL creation success'});
					console.log("Post successful");
				}
			});
		});
	};

	this.update = function (jadwal,id,res) {
		connection.acquire(function(err,con) {
			con.query('update jadwal set name = ? where id = ?', [jadwal,id], function(err,result) {
				con.release();
				if (err) {
					res.send({status:1, massage:'JADWAL update fail'});
	
				} else {
					res.send({status:0, massage:'JADWAL update success'});
					console.log("Put successful");
				}
			});
		});
	};

this.delete = function (id,res) {
		connection.acquire(function(err,con) {
			con.query('delete from jadwal where id = ?', id, function(err,result) {
				con.release();
				if (err) {
					res.send({status:1, massage:'JADWAL delete fail'});
					res.send({status:1, massage:'JADWAL delete fail'});
				} else {
					res.send({status:0, massage:'JADWAL delete success'});
					console.log("Delete successful");
				}
			});
		});
	};
};

module.exports = new jadwal();
