const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('public'))
app.set('view engine', 'pug');

//Assignment-1
app.get('/', (req, res) => {
  res.render("index")
});

//Assignment-2
app.get('/getData', (req, res) => {
  var result;
  if (!req.query.number) {
    result = "Lack of Parameter"
  } else if (isNaN(req.query.number)) {
    result = "Wrong Parameter"
  } else {
    result = ((1 + Number(req.query.number)) * Number(req.query.number)) / 2;
  }
  res.send(`${result}`);
});

//Assignment-3
app.post('/getData', (req, res) => {
  console.log(req.body);
});


//Assignment-4
app.get('/myName', (req, res) => {
  var name = req.cookies.username;
  if (name) {
    res.render("myName", { name: name });
  } else {
    res.redirect('/trackName');
  }
});

app.get('/trackName', (req, res) => {
  res.render("trackName");
});

app.post('/trackName', (req, res) => {
  res.cookie('username', req.body.username);
  res.redirect("/myName");
});




//set up a server
app.listen(3000, () => {
  console.log("The application is running on localhost:3000.")
});
