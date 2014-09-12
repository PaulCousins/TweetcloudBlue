/*jshint node:true*/

// Wrapper around the Twitter API class to make a singleton object.

var Twitter = require('twitter');

// Singleton pattern inspired by this page: http://simplapi.wordpress.com/2012/05/14/node-js-singleton-structure/

function singleton() {

	return new Twitter({
		consumer_key: 'WrE1T6dUl3IMSVOHCX3k5Dj7T',
		consumer_secret: 'LPXu9HJq3Ue59Ld0ltDGZvvSgDGmSPl5g5Diaaw0R9icGw8A3K',
		access_token_key: '',
		access_token_secret: ''
	});

}

singleton.instance = null;
 
/**
 * Singleton getInstance definition
 * @return singleton class
 */
singleton.getInstance = function(){
    if(this.instance === null){
        this.instance = new singleton();
    }
    return this.instance;
}
 
module.exports = singleton.getInstance();