function DataSourceService() {

	this.sources = {
		'loremipsum': { 'title': "U.S. Constitution", 'dataRoute': '/loremipsum' },
		'twitter': { 'title': "Twitter", 'dataRoute' : '/twitter' }
	};
	
	this.currentSourceSlug = null;
	
}

DataSourceService.prototype.setSource = function(slug) {
	if (slug && (!this.sources[slug])) throw "setSource(): Invalid slug '"+slug+"'.";
	this.currentSourceSlug = slug;
}

DataSourceService.prototype.getCurrentTitle = function() {
	if (!this.currentSourceSlug) return null;
	if (!this.sources[this.currentSourceSlug]) throw "getCurrentTitle(): No data source selected.";
	return this.sources[this.currentSourceSlug].title;
}

DataSourceService.prototype.getCurrentDataRoute = function() {
	if (!this.currentSourceSlug || !this.sources[this.currentSourceSlug]) throw "getSourceDataRoute(): No data source selected.";
	return this.sources[this.currentSourceSlug].dataRoute;
}

DataSourceService.prototype.isSourceSet = function() {
	return (this.currentSourceSlug ? true : false);
}

DataSourceService.prototype.isCurrentSource = function(slug) {
	return (this.currentSourceSlug === slug);
}
