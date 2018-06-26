var express = require('express');
var app = express();
var db = require('./db');
var UserController = require('./user/UserController');
var DemoController = require('./demo/DemoController');
var IliadController = require('./Iliad/IliadController');

app.use('/users', UserController);
app.use('/demo', DemoController);
app.use('/iliad', IliadController);

module.exports = app;