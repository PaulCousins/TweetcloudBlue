function DataSourceService() {

	var _sources = {
		'loremipsum': { 'title': "U.S. Constitution", 'dataRoute': '/loremipsum' },
		'twitter': { 'title': "Twitter", 'dataRoute' : '/twitter' }
	};
	
	var _currentSourceSlug = null;

	this.setSource = function(slug) {
		if (slug && (!_sources[slug])) throw "setSource(): Invalid slug '"+slug+"'.";
		_currentSourceSlug = slug;
	}
	
	this.getSourceMenu = function() {
		menu = {};
		for (var key in _sources) {
			if (_sources.hasOwnProperty(key)) {
				menu[key] = _sources[key].title;
			}
		}
		return menu;		
	}

	this.getCurrentTitle = function() {
		if (!_currentSourceSlug) return null;
		if (!_sources[_currentSourceSlug]) throw "getCurrentTitle(): No data source selected.";
		return _sources[_currentSourceSlug].title;
	}

	this.getCurrentDataRoute = function() {
		if (!_currentSourceSlug || !_sources[_currentSourceSlug]) throw "getSourceDataRoute(): No data source selected.";
		return _sources[_currentSourceSlug].dataRoute;
	}

	this.isSourceSet = function() {
		return (_currentSourceSlug ? true : false);
	}

	this.isCurrentSource = function(slug) {
		return (_currentSourceSlug === slug);
	}

}