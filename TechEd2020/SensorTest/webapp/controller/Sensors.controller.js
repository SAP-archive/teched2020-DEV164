sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/IconColor",
    "sap/m/MessageToast",
    "sap/ui/model/Filter",
    "sap/ui/core/Fragment"
], function (Controller, IconColor, MessageToast, Filter, Fragment) {
    "use strict";

    return Controller.extend("keepcool.SensorsTest.controller.Sensors", {
        onInit: function () {
            this._aCustomerFilters = [];
            this._aStatusFilters = [];
            this._oSensorModel = this.getOwnerComponent().getModel("sensorModel");
            this._oSensorModel.dataLoaded().then(function () {
                this._oThreshold = this._oSensorModel.getProperty("/threshold");
                MessageToast.show(this.getOwnerComponent().getModel("i18n").getResourceBundle().getText("msgSensorDataLoaded"), { closeOnBrowserNavigation: false, duration: 10000 });
            }.bind(this));
        },
        formatIconColor: function (iTemperature) {
            if (iTemperature < this._oThreshold.warning) {
                return IconColor.Default;
            } else if (iTemperature >= this._oThreshold.warning && iTemperature < this._oThreshold.error) {
                return IconColor.Critical;
            } else {
                return IconColor.Negative;
            }
        },
        onCustomerSelectConfirm: function (oEvent) {
            var aSelectedItems = oEvent.getParameter("selectedItems");
            var oBinding = this.getView().byId("sensorsList").getBinding("items");
            this._aCustomerFilters = aSelectedItems.map(function (oItem) {
                return new Filter("customer", "EQ", oItem.getTitle());
            });
            oBinding.filter(this._aCustomerFilters.concat(this._aStatusFilters));
        },
        onSensorSelect: function (oEvent) {
            this._aCustomerFilters = [];
            this._aStatusFilters = [];

            var oBinding = this.getView().byId("sensorsList").getBinding("items"),
                sKey = oEvent.getParameter("key");

            if (sKey === "Ok") {
                this._aStatusFilters = [new Filter("temperature/value", "LT", this._oThreshold.warning, false)];
            } else if (sKey === "Warning") {
                this._aStatusFilters = [new Filter("temperature/value", "BT", this._oThreshold.warning, this._oThreshold.error, false)];
            } else if (sKey === "Error") {
                this._aStatusFilters = [new Filter("temperature/value", "GT", this._oThreshold.error, false)];
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
                    name: "keepcool.SensorTest.view.CustomerSelectDialog",
                    controller: this
                }).then(function (oDialog) {
                    this._oDialog = oDialog;
                    this._oDialog.setModel(this._oSensorModel, "sensorModel");
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
        navToSensorStatus: function (oEvent) {
            var iSensorIndex = oEvent.getSource().getBindingContext("sensorModel").getProperty("index");
            this.getOwnerComponent().getRouter().navTo("RouteSensorStatus", { index: iSensorIndex });
        }
    });
});