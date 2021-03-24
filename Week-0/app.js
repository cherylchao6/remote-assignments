const express = require("express");
const app = express();

app.get('/', (req, res) => {
  res.send("hi")
});

//set up a server
app.listen(80, () => {
  console.log("The application is running on localhost:80.")
});