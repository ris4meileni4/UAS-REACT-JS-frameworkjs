var connection = require ('../config/connection');

function Todo() {
	this.get = function(res) {
		connection.acquire(function(err,con) {
			con.query('select * from todo_list', function(err,result) {
				con.release();
				res.send(result);
				console.log("Get successful");
			});
		});
	};

	this.getByID = function(id,res) {
		connection.acquire(function(err,con) {
			con.query('select * from todo_list where id = ?', id, function(err, result) {
				con.release();
				res.send(result);
				console.log("Get by ID successful");
			});
		});
	};

	this.create = function(todo,res) {
		connection.acquire(function(err,con) {
			con.query('insert into todo_list set ?', todo, function(err,result) {
				con.release();
				if (err) {
					res.send({status:1, massage:'TODO creation fail'});
				}else{
					res.send({status:0, massage:'TODO creation success'});
					console.log("Post successful");
				}
			});
		});
	};

	this.update = function (todo,id,res) {
		connection.acquire(function(err,con) {
			con.query('update todo_list set name = ? where id = ?', [todo,id], function(err,result) {
				con.release();
				if (err) {
					res.send({status:1, massage:'TODO update fail'});
	
				} else {
					res.send({status:0, massage:'TODO update success'});
					console.log("Put successful");
				}
			});
		});
	};

this.delete = function (id,res) {
		connection.acquire(function(err,con) {
			con.query('delete from todo_list where id = ?', id, function(err,result) {
				con.release();
				if (err) {
					res.send({status:1, massage:'TODO delete fail'});
					res.send({status:1, massage:'TODO delete fail'});
				} else {
					res.send({status:0, massage:'TODO delete success'});
					console.log("Delete successful");
				}
			});
		});
	};
};

module.exports = new Todo();
