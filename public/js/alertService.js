function AlertService() {

	// [ { type: "danger"|"success"|"info"|etc., message: "" } ]
	this.alerts = [];

}

AlertService.prototype.getAlerts = function() {
	return this.alerts;
}

AlertService.prototype.addAlert = function(type,message) {
	this.alerts.push({'type': type, 'message': message});
}

AlertService.prototype.closeAlert = function(index) {
	this.alerts.splice(index, 1);
}
