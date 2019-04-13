// Dependencies

var express = require('express');
var path = require('path');

// import the js file that holds the array
//var moduleIport = require('./array.js')

// set up the express data base

var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
// ===========================================================
// app.get("/", function(req, res) {
//     res.send("Welcome to the HOT restauraunt!");
//   });

app.get("/", function(req, res) {
   res.sendFile(path.join(__dirname, "home.html"));
})

app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
})

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
})




















// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });


