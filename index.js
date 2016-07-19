var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var app = express();
var port = 8000;

app.use(express.static(__dirname + '/www'));
app.listen(port);

console.log("Server listening on port " +  port);

module.exports = app;