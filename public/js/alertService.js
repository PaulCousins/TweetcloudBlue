function AlertService() {

	// [ { type: "danger"|"success"|"info"|etc., message: "" } ]
	this.alerts = [];

	this.addAlert = function(type,message) {
		this.alerts.push({'type': type, 'message': message});
	}

	this.closeAlert = function(index) {
		this.alerts.splice(index, 1);
	}

}

