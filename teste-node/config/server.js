var express = require('express');
var consign = require('consign');

var app =express();

app.set('view engine','ejs');
app.set('views','./app/views');

consign()
	.include('app/routes')
	.then('config/dbConnection.js')
	.then('app/models')
	.into(app);// estou scanner em toda a pasta routes para incluir em app

module.exports = app;