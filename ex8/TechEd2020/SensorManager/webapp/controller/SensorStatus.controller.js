sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("keepcool.SensorManager.controller.SensorStatus", {
        navToSensors: function () {
            this.getOwnerComponent().getRouter().navTo("RouteSensors");
        }
    });
});