

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

//routers to our public pages
var apiRoute = require('./app/routing/api_routes.js'); 
var htmlRoute = require('./app/routing/html-routes.js');

app.use(express.static('app/public'));
//makes the entire "public" folder availible for use

require('./app/routing/api_routes.js')(app);
require('./app/routing/html-routes.js')(app);


app.listen(PORT, function () {
	console.log('App listening on PORT: ' + PORT);
});

