//TODO var gsOriginalQuery = '{$q}'.replace(/\s+/g,'+').replace(/"/g,"%23");
//TODO Abstract out data retrieval (which will differ between loremipsum and twitter) from UI.


var app = angular.module('tweetcloud', ['ui.bootstrap']);

app.controller('cloudCtlr', 
	['$scope','$http','$location',
		function ($scope,$http,$location) {

	var searchObject = $location.search();
		// Valid query parameters (all optional)
		//TEMP source: 'twitter'
		//TODO query
		//TODO qt: query threshold
		//TODO scale: initial base scale
		//TODO st: string threshold

	$scope.quantityThreshold = 5; //TODO (searchObject) && (searchObject.qt) && (searchObject.qt is number)
	$scope.basescale        = 40; //TODO (searchObject) && (searchObject.scale) && (searchObject.scale is number)
	$scope.stringThreshold  = 10; //TODO (searchObject) && (searchObject.st) && (searchObject.st is number)
	
	//TEMP
	$scope.dataRoute = "/loremipsum"; 
	if ((searchObject) && (searchObject.source == "twitter")) {
		$scope.dataRoute = "/twitter";
	}
	
	$scope.getContent = function() {
		if (!$scope.cloudified) return null;
		return $scope.cloudified.data;
	}
	
	// Total number of strings read by the data service.
	$scope.getStringCount = function() {
		if (!$scope.cloudified) return 0;
		if (!$scope.cloudified.stringCount) return 0;
		return $scope.cloudified.stringCount;
	}
	
	// Number of transforms read and applied by the data service.
	$scope.getTransformCount = function() {
		if (!$scope.cloudified) return 0;
		if (!$scope.cloudified.transformCount) return 0;
		return $scope.cloudified.transformCount; 
	}
	
	// Total number of words counted by the data service.
	$scope.getWordCount = function() {
		if (!$scope.cloudified) return 0;
		if (!$scope.cloudified.wordCount) return 0;
		return $scope.cloudified.wordCount;
	}
	
	// An ordered list of words that are keys to the cloud.
	$scope.getWords = function() {
		if (!$scope.cloudified) return null;
		return $scope.cloudified.words; 
	}
	
	$scope.getCloudData = function() {
		if (!$scope.cloudified) return null;
		return $scope.cloudified.cloud;
	}
	
	// Get data from server. 
	// Assumes data returned will already be cloudified.
	$scope.downloadCloud = function() {
		$http({
			method: 'GET',
			url: $scope.dataRoute
		}).success( function(data) {
			$scope.cloudified = data;
			$scope.filterContent();
			$scope.setInitialQuantityThreshold();
		}).error( function(data) {
			console.log("Failed to receive data from server."); //TODO Make this part of the UI.
		});
	};

	$scope.showStrings = false;
	
	// Filter query.
	
	$scope.query = [];
	
	$scope.addQueryTerm = function(term) {
		$scope.query.push(term);
	}
	
	$scope.resetQuery = function() {
		$scope.query = [];
	}
	
	$scope.queryToString = function() {
		return $scope.query.join(' ');
	}
	
	$scope.showTwitterLogin = function() {
		return $scope.dataRoute == "/twitter";
	}

	// Interface functions.
	
	$scope.initialize = function()
	{
		$scope.query = [];
		$scope.words = [];
		$scope.downloadCloud(); // calls $scope.filterContent();
	}
	
	$scope.setInitialQuantityThreshold = function() {
		// Base on 75th percentile of values that are greater than 1.
		
		aCounts = [];
		cloudData = $scope.getCloudData();
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
		console.log("setInitialQuantityThreshold",aCounts,$scope.quantityThreshold); 
	}
	
	$scope.more = function() {
		$scope.quantityThreshold *= 1.5;
		//DEP $scope.buildCloud();
	}
	
	$scope.less = function() {
		$scope.quantityThreshold /= 1.5;
		//DEP $scope.buildCloud();
	}
	
	$scope.bigger = function() {
		$scope.basescale += 20;
		//DEP $scope.buildCloud();
	}
	
	$scope.smaller = function() {
		$scope.basescale -= 20;
		//DEP $scope.buildCloud();
	}
	
	// This method really should be in the button controller.
	// But then I would have to add a watch for basescale. Hmmm...
	$scope.countToStyle = function(count) {
		return { "font-size": ""+($scope.basescale+count*4)+"%" };
	}
	
	$scope.matches = [];
	$scope.resultCount = 0;
	
	$scope.filterContent = function() {
		var filteredContent = [];
		angular.forEach($scope.getContent(), function(contentString) {
			match = true;
			angular.forEach($scope.query, function(term) {
				match &= contentString.match(new RegExp(term,'gi'));
			});
			if (match) {
				filteredContent.push(contentString);
			}
		});
		$scope.matches = angular.copy(filteredContent);
		$scope.resultCount = $scope.matches.length;
		
		$scope.showStrings = ($scope.resultCount <= $scope.stringThreshold);
	}

	$scope.initialize(); // do this by default

}]); // controller 'cloudCtlr'

// Separate controller for the buttons themselves.	

app.controller('buttonCtlr', function ($scope) {

//DEP console.log('buttonCtlr',$scope.wordspec.count,'<',$scope.quantityThreshold);

	// Determine if current button should be hidden from view due to current quantity threshold.
	$scope.hideThis = false;

	// Apply the current quantity threshold filter to the wordspec controlled by this button.
	function applyHideThis() {
		$scope.hideThis = $scope.wordspec.count < $scope.quantityThreshold;
	}

	// Watchers: Things we need to watch lest they alter the properties of buttons:
	//TODO - Query
	//TODO - Cloud content.
	// - Quantity threshold.
	
	// Changing quantity threshold can cause buttons to appear/disappear.
	$scope.$watch(
		"quantityThreshold",
		function(newValue,oldValue) {
			if ( newValue === oldValue ) {
				return;
			}
			applyHideThis();
		}
	);

	// Set default state for each button.
	applyHideThis();

}); // controller 'buttonCtlr'

