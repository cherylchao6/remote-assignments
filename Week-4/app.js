const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mysql = require('mysql');
const cookieParser = require("cookie-parser");
app.set('view engine', 'hbs');
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
//fetch userdata
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//define routes
app.use('/', require('./routes/pages'));

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "assignment"
});
//connect to database
db.connect(function (err) {
  if (err) throw err;
  console.log("Database Connected!");
});



// creat database
// db.connect(function (err) {
//   if (err) throw err;
//   console.log("Connected!");
//   db.query("CREATE DATABASE assignment", function (err, result) {
//     if (err) throw err;
//     console.log("Database created");
//   });
// });

//create table
// db.connect(function (err) {
//   if (err) throw err;
//   console.log("Connected!");
//   let sql = "CREATE TABLE user (id INT AUTO_INCREMENT PRIMARY KEY, email VARCHAR(255), password VARCHAR(255))";
//   db.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });
// });


//set up a server
app.listen(5001, () => {
  console.log("The application is running on localhost:5001.")
});