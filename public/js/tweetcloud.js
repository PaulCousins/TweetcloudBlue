//TODO Abstract out data retrieval (which will differ between loremipsum and twitter) from UI.

var app = angular.module('tweetcloud', ['ui.bootstrap']);

app.factory('alertService', function() {

	// [ { type: "danger"|"success"|"info"|etc., message: "" } ]
	var alerts = [];

	return {
	
		getAlerts: function() {
			return alerts;
		},
	
		addAlert: function(type,message) {
			alerts.push({'type': type, 'message': message});
		},

		closeAlert: function(index) {
			alerts.splice(index, 1);
		}
		
	};
});

// Message box controller.
app.controller('alertCtlr', ['$scope','alertService', function ($scope,alertService) {
	$scope.getAlerts =  alertService.getAlerts;
	$scope.addAlert = alertService.addAlert;
	$scope.closeAlert = alertService.closeAlert;
}]);

app.controller('cloudCtlr', 
	['$scope','$http','$location','alertService',
		function ($scope,$http,$location,alertService) {
		
	$scope.sources = {
		'loremipsum': { 'title': "U.S. Constitution", 'dataRoute': '/loremipsum' },
		'twitter': { 'title': "Twitter", 'dataRoute' : '/twitter' }
	};

	var searchObject = $location.search();
	console.log(searchObject);
		// Valid query parameters (all optional)
		//TODO query
		//TODO scale: initial base scale
		//TODO st: string threshold

	$scope.basescale        = 40; //TODO (searchObject) && (searchObject.scale) && (searchObject.scale is number)
	$scope.stringThreshold  = 10; //TODO (searchObject) && (searchObject.st) && (searchObject.st is number)
	
	$scope.isCurrentSource = function(slug) {
		searchObject.source = slug;
	}
	
	$scope.setSource = function(slug) {
		searchObject.source = slug;
	}
	
	$scope.source = $scope.sources[searchObject.source];
	
	$scope.getContent = function() {
		if (!$scope.cloudified) return null;
		return $scope.cloudified.extract;
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
		words = $scope.cloudify.cloud.reduce(function(a,word) { a.push(word); }, {});
		words.sort();
		return words; 
	}
	
	$scope.getCloudData = function() {
		if (!$scope.cloudified) return null;
		return $scope.cloudified.cloud;
	}
	
	// Get data from server. 
	// Assumes data returned will already be cloudified.
	$scope.downloadCloud = function() {
		postData = {
			'query': $scope.getQueryAsString()
		};
		alertService.addAlert("info","Retrieving data.");
		$http
			.post($scope.source.dataRoute,postData)
			.success( function(data) {
				alertService.addAlert("info","Data retrieved; formatting data.");
				$scope.cloudified = data;
				$scope.filterContent();
				$scope.setInitialQuantityThreshold();
			}).error( function(data) {
				alertService.addAlert("danger","Failed to receive data from server."); 
			});
	};

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
		if ($location.search()) {
			return $location.search().q.split(' ');
		} else {
			return [];
		}
	}

	$scope.addQueryTerm = function(term) {
		$location.search().q += " "+term;
		$scope.downloadCloud();
	}
	
	$scope.resetQuery = function() {
		$location.search().q = '';
		$scope.downloadCloud();
	}
	
	// Interface functions.
	
	$scope.initialize = function()
	{
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
		$scope.matches = angular.copy($scope.getContent());
		$scope.resultCount = $scope.matches.length;
		$scope.showStrings = ($scope.resultCount <= $scope.stringThreshold);
	}

	$scope.showTwitterLogin = function() {
		return searchObject.source == "twitter"; //TODO and not already logged in.
	}

	$scope.initialize(); // do this by default

}]); // controller 'cloudCtlr'

// Separate controller for the buttons themselves.	

app.controller('buttonCtlr', function ($scope) {

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

