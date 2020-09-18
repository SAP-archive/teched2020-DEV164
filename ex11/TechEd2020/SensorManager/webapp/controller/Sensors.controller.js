sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/IconColor",
    "sap/m/MessageToast",
    "sap/ui/model/Filter",
    "sap/ui/core/Fragment"
],
    function (Controller, IconColor, MessageToast, Filter, Fragment) {
        "use strict";

        return Controller.extend("keepcool.SensorsTest.controller.Sensors", {
            onInit: function () {
                this._aCustomerFilters = [];
                this._aStatusFilters = [];
                this.getSensorModel().dataLoaded().then(function () {
                    MessageToast.show(this.getOwnerComponent().getModel("i18n").getResourceBundle().getText("msgSensorDataLoaded"), { closeOnBrowserNavigation: false });
                }.bind(this));
            },
            getSensorModel: function () {
                return this.getOwnerComponent().getModel("sensorModel");
            },
            formatIconColor: function (iTemperature) {
                var oThreshold = this.getSensorModel().getProperty("/threshold")
                if (!oThreshold) {
                    return IconColor.Neutral;
                } else if (iTemperature < oThreshold.critical) {
                    return IconColor.Default;
                } else if (iTemperature >= oThreshold.critical && iTemperature < oThreshold.warning) {
                    return IconColor.Critical;
                } else {
                    return IconColor.Negative;
                }
            },
            onSensorSelect: function (oEvent) {
                var oBinding = this.getView().byId("sensorsList").getBinding("items"),
                    sKey = oEvent.getParameter("key"),
                    oThreshold = this.getSensorModel().getProperty("/threshold");

                if (sKey === "Ok") {
                    this._aStatusFilters = [new Filter("temperature/value", "LT", oThreshold.critical, false)];
                } else if (sKey === "Warning") {
                    this._aStatusFilters = [new Filter("temperature/value", "BT", oThreshold.critical, oThreshold.warning, false)];
                } else if (sKey === "Error") {
                    this._aStatusFilters = [new Filter("temperature/value", "GT", oThreshold.warning, false)];
                } else {
                    this._aStatusFilters = [];
                }

                oBinding.filter(this._aStatusFilters.concat(this._aCustomerFilters));
            },
            onCustomerSelect: function (oEvent) {
                if (this._oDialog) {
                    this._oDialog.open();
                } else {
                    Fragment.load({
                        type: "XML",
                        name: "keepcool.SensorManager.view.CustomerSelectDialog",
                        controller: this
                    }).then(function (oDialog) {
                        this._oDialog = oDialog;
                        this._oDialog.setModel(this.getSensorModel(), "sensorModel");
                        this._oDialog.setModel(this.getView().getModel("i18n"), "i18n");
                        this._oDialog.setMultiSelect(true);
                        this._oDialog.open();
                    }.bind(this));
                }
            },
            onCustomerSelectChange: function (oEvent) {
                var sValue = oEvent.getParameter("value");
                var oFilter = new Filter("name", "Contains", sValue);
                var oBinding = oEvent.getSource().getBinding("items");
                oBinding.filter([oFilter]);
            },
            onCustomerSelectConfirm: function (oEvent) {
                var aSelectedItems = oEvent.getParameter("selectedItems");
                var oBinding = this.getView().byId("sensorsList").getBinding("items");
                this._aCustomerFilters = aSelectedItems.map(function (oItem) {
                    return new Filter("customer", "EQ", oItem.getTitle());
                });
                oBinding.filter(this._aCustomerFilters.concat(this._aStatusFilters));
            },
            navToSensorStatus: function(oEvent) {
                var iSensorIndex = oEvent.getSource().getBindingContext("sensorModel").getProperty("index");
                this.getOwnerComponent().getRouter().navTo("RouteSensorStatus", {index: iSensorIndex});
            }
        });
    });