function CloudService() {

	// Parameters
	this.http = {};
	this.query = '';
	this.dataRoute = '';
	this.retrieveDataAlertFn = angular.noop; // () Callback for retrieving data alert.
	this.doneFn = angular.noop; // ()
	this.errorFn = angular.noop; // (data) 
	
	this.cloudData = {};
	
}

CloudService.prototype.setCloudData = function(data) {
	console.log('doneFn',this.doneFn);
	this.cloudData = data;
	this.doneFn();
}

// Parameter setters.

CloudService.prototype.setHttp = function(value) {
	this.http = value;
}

CloudService.prototype.setQuery = function(value) {
	this.query = value;
}

CloudService.prototype.setDataRoute = function(value) {
	this.dataRoute = value;
}

CloudService.prototype.setRetrieveDataAlertFn = function(fn) {
	this.retrieveDataAlertFn = fn || angular.noop;
}

CloudService.prototype.setDoneFn = function(fn) {
	this.doneFn = fn || angular.noop;
}

CloudService.prototype.setErrorFn = function(fn) {
	this.errorFn = fn || angular.noop;
}

// Download function.

CloudService.prototype.download = function() {
	console.log('doneFn',this.doneFn);
	postData = {
		'query': this.query
	};
	this.retrieveDataAlertFn();
	this.http
		.post(this.dataRoute,postData)
		.success(this.setCloudData)
		.error(this.errorFn);
}

// Data retrieval functions.

CloudService.prototype.getCloudData = function() {
	if (!this.cloudData) return null;
	return this.cloudData.cloud;
}

CloudService.prototype.getContent = function() {
	if (!this.cloudData) return null;
	return this.cloudData.extract;
}

// Total number of strings read by the data service.
CloudService.prototype.getStringCount = function() {
	if (!this.cloudData) return 0;
	if (!this.cloudData.stringCount) return 0;
	return this.cloudData.stringCount;
}

// Number of transforms read and applied by the data service.
CloudService.prototype.getTransformCount = function() {
	if (!this.cloudData) return 0;
	if (!this.cloudData.transformCount) return 0;
	return this.cloudData.transformCount; 
}

// Total number of words counted by the data service.
CloudService.prototype.getWordCount = function() {
	if (!this.cloudData) return 0;
	if (!this.cloudData.wordCount) return 0;
	return this.cloudData.wordCount;
}

// An ordered list of words that are keys to the cloud.
CloudService.prototype.getWords = function() {
	if (!this.cloudData) return null;
	words = this.cloudData.cloud.reduce(function(a,word) { a.push(word); }, {});
	words.sort();
	return words; 
}