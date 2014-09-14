/*jshint node:true*/

var Twitter = require('./public/js/twitter'), // returns singleton instance
	Cloudify = require('./public/js/cloudify'),
	LoremIpsum = require('./public/js/loremipsum');

function toResponse(response,parameters) {
	response.json(Cloudify(parameters));
}
	
exports.twitter = function(req, res){

	// TEMP For now, get some tweets from search.
	//TODO Move the Twitter get to a separate route, so the application can call it dynamically.
	//TODO lang: 'en'
	Twitter.search('obama', { count: 10 }, function(data) {
		parameters = {
			data: data.statuses,
			textExtractFn: function(s) { return s.text; },
			idExtractFn: function(s) { return s.id; }
		};
		toResponse(res,parameters);
	});
}

exports.loremipsum = function(req, res){

	parameters = {
		data: LoremIpsum(),
		textExtractFn: function(s) { return s; },
		idExtractFn: function(s) { return s; }
	};
	toResponse(res,parameters);

}

exports.login = function(req, res){
	res.json("login"); //TODO
}