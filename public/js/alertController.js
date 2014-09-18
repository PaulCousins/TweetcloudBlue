function AlertController ($scope,$animate,alertService) {
	$scope.alerts =  alertService.alerts;
	$scope.addAlert = alertService.addAlert;
	$scope.closeAlert = alertService.closeAlert;
}