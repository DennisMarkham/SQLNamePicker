// Require dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var mysql = require("mysql");


// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Set our port to 8080
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "names_db"
});

//initialize as empty Javascript object
var newQuery = {};

app.get("/", function(req, res) {
  //connection.end();
  res.sendFile(path.join(__dirname, "index.html"));
});
  
app.post("/api/new", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  newQuery = req.body;
  

  console.log(newQuery);

  // connection.connect(function(err) {
  // if (err) throw err;
  // console.log("connected as id " + connection.threadId);
  });

app.get("/api/nameList", function(req, res) {
	
	//connecting to DB
	connection.connect(function(err){
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
});



// switch(newQuery.dropDown) {
//   case 'Starts with:':
// //connection.query("SELECT * FROM Cnames WHERE Cname LIKE ?%;", [newQuery.string], function(err, result) {
//   return res.json(result);
// });
//     break;
//   case 'Ends with:':
//   connection.query("SELECT * FROM Cnames WHERE Cname LIKE %?;", [newQuery.string], function(err, result) {
//   return res.json(result);
// });
//     break;
//	 case 'Contains:':
//   connection.query("SELECT * FROM Cnames WHERE Cname LIKE %?%;", [newQuery.string], function(err, result) {
//   return res.json(result);
// });
//     break;
//   default:
//     connection.query("SELECT * FROM Cnames;", function(err, result) {
//   return res.json(result);
// });
// }
//now how od you put a variable in an SQL query again?

	connection.query("SELECT * FROM cnames;", function(err, result) {

  return res.json(result);
});

});
