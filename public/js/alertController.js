function AlertController ($scope,alertService) {
	$scope.getAlerts =  alertService.getAlerts;
	$scope.addAlert = alertService.addAlert;
	$scope.closeAlert = alertService.closeAlert;
}