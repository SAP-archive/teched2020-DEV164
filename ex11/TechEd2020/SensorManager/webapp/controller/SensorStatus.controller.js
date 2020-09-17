sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/base/strings/formatMessage",
    "sap/m/ValueColor"
], function (Controller, formatMessage, ValueColor) {
    "use strict";

    return Controller.extend("keepcool.SensorManager.controller.SensorStatus", {

        formatMessage: formatMessage,

        onInit: function () {
            this.getOwnerComponent().getRouter().getRoute("RouteSensorStatus").attachMatched(this.onRouteMatched, this);
        },

        onRouteMatched: function (oEvent) {
            this.getView().bindElement({
                path: "/sensors/" + oEvent.getParameter("arguments").index,
                model: "sensorModel"
            });
        },

        navToSensors: function () {
            this.getOwnerComponent().getRouter().navTo("RouteSensors");
        },

        formatValueColor: function (oTreshold, iTemperature) {
            oTreshold = oTreshold || {};
            if (iTemperature < oTreshold.warning) {
                return ValueColor.Neutral;
            } else if (iTemperature >= oTreshold.warning && iTemperature < oTreshold.error) {
                return ValueColor.Critical;
            } else {
                return ValueColor.Error;
            }
        }
    });
});