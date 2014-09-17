function CloudService() {

	// Parameters
	var
		_http = {},
		_query = '',
		_dataRoute = '',
		_retrieveDataAlertFn = angular.noop, // () Callback for retrieving data alert.
		_doneFn = angular.noop, // ()
		_errorFn = angular.noop; // (data) 
	
	var _cloudData = {};
	
	function _setCloudData(data) {
		if (!data) {
			throw "CloudService._setCloudDataFn(): Null data!";
		}
		_cloudData = data;
		_doneFn();
	}

	// Parameter setters.

	this.setHttp = function(value) {
		_http = value;
	}

	this.setQuery = function(value) {
		_query = value;
	}

	this.setDataRoute = function(value) {
		_dataRoute = value;
	}

	this.setRetrieveDataAlertFn = function(fn) {
		_retrieveDataAlertFn = fn || angular.noop;
	}

	this.setDoneFn = function(fn) {
		_doneFn = fn || angular.noop;
	}

	this.setErrorFn = function(fn) {
		_errorFn = fn || angular.noop;
	}

	// Download function.

	this.download = function() {
		postData = {
			'query': _query
		};
		_retrieveDataAlertFn();
		_http
			.post(_dataRoute,postData)
			.success(_setCloudData)
			.error(_errorFn);
	}

	// Data retrieval functions.

	this.getCloudData = function() {
		if (!_cloudData) return null;
		return _cloudData.cloud;
	}

	this.getContent = function() {
		if (!_cloudData) return null;
		return _cloudData.extract;
	}

	// Total number of strings read by the data service.
	this.getStringCount = function() {
		if (!_cloudData) return 0;
		if (!_cloudData.stringCount) return 0;
		return _cloudData.stringCount;
	}

	// Number of transforms read and applied by the data service.
	this.getTransformCount = function() {
		if (!_cloudData) return 0;
		if (!_cloudData.transformCount) return 0;
		return _cloudData.transformCount; 
	}

	// Total number of words counted by the data service.
	this.getWordCount = function() {
		if (!_cloudData) return 0;
		if (!_cloudData.wordCount) return 0;
		return _cloudData.wordCount;
	}

	// An ordered list of words that are keys to the cloud.
	this.getWords = function() {
		if (!_cloudData) return null;
		words = _cloudData.cloud.reduce(function(a,word) { a.push(word); }, {});
		words.sort();
		return words; 
	}

}