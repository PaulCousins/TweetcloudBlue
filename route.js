/*jshint node:true*/

var Twitter = require('./public/js/twitter'), // returns singleton instance
	Cloudify = require('./public/js/cloudify'),
	LoremIpsum = require('./public/js/loremipsum');

exports.index = function(req, res) {
	res.render("index.html");
}
	
exports.twitter = function(req, res){

	//TODO lang: 'en'
	//TODO Get parameters from query string.
	Twitter.search('obama', { count: 100 }, function(data) {
		parameters = {
			data: data.statuses,
			textExtractFn: function(s) { return s.text; },
			idExtractFn: function(s) { return s.id; }
		};
		cloudified = Cloudify(parameters);
		cloudified.data = data.statuses;
		res.json(cloudified);
	});
}

exports.loremipsum = function(req, res){

	content = LoremIpsum();
	parameters = {
		data: content,
		textExtractFn: function(s) { return s; },
		idExtractFn: function(s) { return s; }
	};
	cloudified = Cloudify(parameters);
	cloudified.data = content;
	res.json(cloudified);
}

exports.login = function(req, res){
	res.json("login"); //TODO
}