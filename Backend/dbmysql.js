const mysql = require('mysql');

function connectToDatabase() {
	const con = mysql.createConnection({
	  host: "localhost",
	  user: "root",
	  password: "",
	  database: "wtf_novel"
	});
	
	con.connect(function(err) {
	  if (err) throw err;
	  console.log("Connected to MySQL database!");
	});
  
	return con;
  }

module.exports = {connectToDatabase};