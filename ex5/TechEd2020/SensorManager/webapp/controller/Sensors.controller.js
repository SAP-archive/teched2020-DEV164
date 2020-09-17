sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/IconColor",
    "sap/m/MessageToast"
],
    function (Controller, IconColor, MessageToast) {
        "use strict";

        return Controller.extend("keepcool.SensorsTest.controller.Sensors", {
            onInit: function() {
                this.getSensorModel().dataLoaded().then(function() {
                    MessageToast.show(this.getOwnerComponent().getModel("i18n").getResourceBundle().getText("msgSensorDataLoaded"), { closeOnBrowserNavigation: false });
                }.bind(this));
            },
            getSensorModel: function(){
                return this.getOwnerComponent().getModel("sensorModel");
            },
            formatIconColor: function(iTemperature) {
                var oThreshold = this.getSensorModel().getProperty("/threshold")
                if (!oThreshold){
                    return IconColor.Neutral;
                } else if (iTemperature < oThreshold.warning) {
                    return IconColor.Default;
                } else if (iTemperature >= oThreshold.warning && iTemperature < oThreshold.error) {
                    return IconColor.Critical;
                } else {
                    return IconColor.Negative;
                }
            }
        });
    });