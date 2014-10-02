function DataSourceService() {

	var _sources = {
		'loremipsum': { 'title': "U.S. Constitution", 'dataRoute': '/loremipsum' },
		'twitter': { 'title': "Twitter", 'dataRoute' : '/twitter' }
	};
	
	var _currentSourceSlug = null;
	
	this.source = function(slug) {
		if (slug) {
			if (!_sources[slug]) throw "source(): Invalid slug '"+slug+"'.";
			_currentSourceSlug = slug;
		} else {
			return _currentSourceSlug;
		}
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