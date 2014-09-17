function CloudController($scope,$http,$location,alertService,cloudService,dataSourceService) {
		
	var searchObject = $location.search();
		// Valid query parameters (all optional)
		//TODO query
		//TODO scale: initial base scale
		//TODO st: string threshold

	$scope.basescale        = 40; //TODO (searchObject) && (searchObject.scale) && (searchObject.scale is number)
	$scope.stringThreshold  = 10; //TODO (searchObject) && (searchObject.st) && (searchObject.st is number)
	
	dataSourceService.setSource(searchObject.source);
	$scope.dataSource = dataSourceService;
	$scope.sourceTitle = dataSourceService.getCurrentTitle() || "Select Data Source";
	$scope.setSource = function(slug) { 
		dataSourceService.setSource(slug); 
		downloadCloud();
	}
		
	// Get data from server. 
	// Assumes data returned will already be cloudified.
	function downloadCloud() {

		$scope.cloudData = {};
	
		if (dataSourceService.isSourceSet()) {

			cloudService.setHttp($http);
			cloudService.setQuery($scope.getQueryAsString());
			cloudService.setDataRoute(dataSourceService.getCurrentDataRoute());
			cloudService.setRetrieveDataAlertFn(function retrieveDataAlert() {
				alertService.addAlert("info","Retrieving data."); 
			});
			cloudService.setDoneFn(function onDone() {
				alertService.addAlert("info","Data retrieved; formatting data."); 
				$scope.filterContent();
				$scope.buildCloud();
			});
			cloudService.setErrorFn(function onError(data) {
				alertService.addAlert("danger","Failed to receive data from server."); 
			});
			
			cloudService.download();

		} else {
			alertService.addAlert("warning","No data source selected.");
		}
	} 

	$scope.showStrings = false;
	
	// Filter query.
	
	$scope.getQueryAsString = function() {
		if ($location.search()) {
			return $location.search().q;
		} else {
			return '';
		}
	}

	$scope.getQueryAsArray = function() {
		if (!$location.search()) { return []; }
		if (!$location.search().q) { return []; }				
		return $location.search().q.split(' ');
	}

	$scope.addQueryTerm = function(term) {
		$location.search().q += " "+term;
		downloadCloud();
	}
	
	$scope.resetQuery = function() {
		$location.search().q = '';
		downloadCloud();
	}
	
	// Interface functions.
	
	$scope.initialize = function()
	{
		$scope.words = [];
		downloadCloud();
	}
	
	$scope.buildCloud = function() {
		
		$scope.showCloud = false;
		$scope.cloudData = cloudService.getCloudData();

		// Base on 75th percentile of values that are greater than 1.
		// Assumes 
		
		aCounts = [];
		cloudData = cloudService.getCloudData();
		for (var i in cloudData) {
			count = cloudData[i].count;
			if (count>1) aCounts.push(count);
		}
		aCounts.sort();
		n = aCounts.length;
		
		$scope.quantityThreshold = 0;		
		if (n>0) {
			$scope.quantityThreshold = (aCounts[Math.floor(n*.75)]+aCounts[Math.ceil(n*.75)])/2;
		}
		
		$scope.showCloud = true;
		
	}
	
	$scope.more = function() {
		$scope.quantityThreshold /= 1.5;
	}
	
	$scope.less = function() {
		$scope.quantityThreshold *= 1.5;
	}
	
	$scope.bigger = function() {
		$scope.basescale += 20;
	}
	
	$scope.smaller = function() {
		$scope.basescale -= 20;
	}
	
	// This method really should be in the button controller.
	// But then I would have to add a watch for basescale. Hmmm...
	$scope.countToStyle = function(count) {
		return { "font-size": ""+($scope.basescale+count*4)+"%" };
	}
	
	$scope.matches = [];
	$scope.resultCount = 0;
	
	$scope.filterContent = function() {
		$scope.matches = angular.copy(cloudService.getContent());
		if (!$scope.matches) {
			throw "$scope.filterContent(): No data returned by cloudService.getContent() (shouldn't happen!)";
		}
		$scope.resultCount = $scope.matches.length;
		$scope.showStrings = ($scope.resultCount <= $scope.stringThreshold);
	}

	$scope.showTwitterLogin = function() {
		return dataSourceService.isCurrentSource("twitter"); //TODO and not already logged in.
	}

	$scope.initialize(); // do this by default

}
