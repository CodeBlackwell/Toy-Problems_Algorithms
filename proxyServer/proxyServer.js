var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({
  extended: true
}));

app.listen(3000);
console.log('Now listening on port 3000');

//Create a route to handle texts
app.get('/txt', function(req, res) {
  var text = JSON.stringify(req.body);
  console.log(text, req.body);
  res.send();
});

//Recieve a Get Request