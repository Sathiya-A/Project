var mysql = require('mysql');
var express = require("express");
var ejs = require('ejs');
var app = express();
var port = 3000;
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
var con = mysql.createConnection({
host: "localhost",
user: "root",
password: "1",
database: "swetha"
});


app.get("/", (req, res) => {
con.query("SELECT * FROM Details", function (err, rows, fields) {
  if (err) throw err;
  console.log(rows);
  res.render('index.ejs',{rows:rows});
 
});
})

app.listen(port, () => {
console.log("Server listening on port " + port);
});
