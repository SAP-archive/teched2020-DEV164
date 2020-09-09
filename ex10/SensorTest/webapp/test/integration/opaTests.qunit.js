/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"keepcool/SensorTest/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});
