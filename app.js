/*jshint node:true*/

// app.js
// This file contains the server side JavaScript code for your application.

var Express = require('express'),
	Twitter = require('./public/js/twitter'), // returns singleton instance
	Path = require('path'),
	Routes = require('./route');
	
// Set up Express.
var app = Express();
// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(Express.favicon());
app.use(Express.logger('dev'));
app.use(Express.bodyParser());
app.use(Express.methodOverride());
app.use(app.router);
app.use(Express.static(Path.join(__dirname, 'public')));
app.engine('html', require('ejs').renderFile);

app.get('/', Routes.index);
app.get('/login', Routes.login);
app.get('/twauth', Twitter.login());
app.post('/twitter', Twitter.gatekeeper('/login'), Routes.twitter);
app.post('/loremipsum', Routes.loremipsum);
	
// There are many useful environment variables available in process.env.
// VCAP_APPLICATION contains useful information about a deployed application.
var appInfo = JSON.parse(process.env.VCAP_APPLICATION || "{}");
// TODO: Get application information and use it in your app.

// VCAP_SERVICES contains all the credentials of services bound to
// this application. For details of its content, please refer to
// the document or sample of each service.
var services = JSON.parse(process.env.VCAP_SERVICES || "{}");
// TODO: Get service credentials and communicate with bluemix services.

// The IP address of the Cloud Foundry DEA (Droplet Execution Agent) that hosts this application:
var host = (process.env.VCAP_APP_HOST || 'localhost');
// The port on the DEA for communication with the application:
var port = (process.env.VCAP_APP_PORT || 3000);
// Start server
app.listen(port, host);
console.log('App started on port ' + port);

