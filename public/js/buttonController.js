function ButtonController($scope) {

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

}
