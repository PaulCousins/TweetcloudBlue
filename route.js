/*jshint node:true*/

var Twitter = require('./public/js/twitter'); // returns singleton instance

//TODO var Cloudify = require('./cloudify);

exports.index = function(req, res){

	// TEMP For now, get some tweets from search.
	Twitter.search('barack obama', function(data) {
		res.json(data);
	});

}

exports.login = function(req, res){
	res.json("login"); //TODO
}