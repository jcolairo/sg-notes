var express = require('express');
var router = require('./config/router');
var bodyParser = require('body-parser');
var layout = require('express-ejs-layouts');
var app = express();
var port = 3000;

app.set('view engine', 'ejs');
app.use(layout);
app.use(bodyParser.json()); // for parsin application/json
app.use(bodyParser.urlencoded({extended: true})); // for parsing application

app.use(router);

app.listen(port, function() {
  console.log('App is running on port', port);
});
