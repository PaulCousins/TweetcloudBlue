function AlertService() {

	// [ { type: "danger"|"success"|"info"|etc., message: "" } ]
	this.alerts = [];

	this.addAlert = function(type,message) {
		var newLength = this.alerts.push({'type': type, 'message': message});

		timeoutCallbackFactory = function(pThis,pNewLength) {
			return function() {
				pThis.closeAlert(pNewLength-1);
			}
		};
		if (type !== "danger") {
			window.setTimeout(timeoutCallbackFactory(this,newLength),5000);
		}
	}

	this.closeAlert = function(index) {
		if (index >= this.alerts.length) index = this.alerts.length-1;
		this.alerts.splice(index, 1);
	}

}

