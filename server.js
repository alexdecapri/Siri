var express = require("express");
var app = express();

//each time server is run, this message will print to the terminal
app.listen(8887, function() {
  console.log("Listening on port 8887");
});

var messages = ["Hello there.", "I'm sorry, I cannot take any requests at this time.", "I cna tell you how to do that!"];

app.get("/", function(req, res) {
  res.send(JSON.stringify({
    message: getRandomMessage()
  }))
});
