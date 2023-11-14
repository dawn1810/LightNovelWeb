const mysql = require("mysql");
const util = require("util");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "wtf_novel",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL!");
});
const queryAsync = util.promisify(connection.query).bind(connection);


module.exports = {
  connection,
  queryAsync,
};
