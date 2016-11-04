//creates the routes once connected to the server for the followimg html pages.

var path = require('path');

module.exports = function (app) {
	//the survey page
	app.get('/survey', function (req, res) {
		res.sendFile(path.join(__dirname, '../public/survey.html'));
	});


	//default page if nothing is used
	app.use('/', function (req, res) {
		res.sendFile(path.join(__dirname, '../public/index.html'));
	});
}
