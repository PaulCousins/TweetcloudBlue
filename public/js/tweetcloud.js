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
	
	$scope.setQuantityThreshold = function() {
		// Based on median value of word counts.
		aCounts = [];
		for (var i in $scope.cloudified) {
			aCounts.push($scope.cloudified[i].count);
		}
		aCounts.sort();
		n = aCounts.length;
		
		if (n%2) { // n is odd
			$scope.quantityThreshold = (aCounts[(n-1)/2]);
		} else { // n is even
			$scope.quantityThreshold = (aCounts[n/2]+aCounts[n/2-1])/2;
		}
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

	// Determine if current button should be hidden from view due to current quantity threshold.
	$scope.hideThis = applyHideThis();

	// Any time the quantity threshold changes, we may have to
	// alter the visual exclusion of our button.
	$scope.$watch(
		"quantityThreshold",
		function(newValue,oldValue) {
			if ( newValue === oldValue ) {
				return;
			}
			applyHideThis();
		}
	);

	// Apply the current quantity threshold filter to the wordspec controlled by this button.
	function applyHideThis() {
		$scope.hideThis = $scope.count < $scope.quantityThreshold;
	}

}); // controller 'buttonCtlr'

