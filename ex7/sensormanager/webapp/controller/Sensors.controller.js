sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/IconColor",
    "sap/m/MessageToast",
    "sap/ui/model/Filter",
    "sap/ui/core/Fragment"
],
    function (Controller, IconColor, MessageToast, Filter, Fragment) {
        "use strict";

        return Controller.extend("keepcool.sensormanager.controller.Sensors", {
            onInit: function() {
                this._aCustomerFilters = [];
                this._aStatusFilters = [];
                this.getSensorModel().dataLoaded().then(function() {
                    MessageToast.show(
                        this.getOwnerComponent().getModel("i18n").getResourceBundle().getText("msgSensorDataLoaded"), 
                        { closeOnBrowserNavigation: false });
                }.bind(this));
            },
            getSensorModel: function(){
                return this.getOwnerComponent().getModel("sensorModel");
            },
            formatIconColor: function(iTemperature) {
                var oThreshold = this.getSensorModel().getProperty("/threshold");
                if (!oThreshold) {
                    return IconColor.Neutral;
                } else if (iTemperature < oThreshold.warm) {
                    return IconColor.Default;
                } else if (iTemperature >= oThreshold.warm && iTemperature < oThreshold.hot) {
                    return IconColor.Critical;
                } else {
                    return IconColor.Negative;
                }
            },
            onSensorSelect: function (oEvent) {
                var oBinding = this.getView().byId("sensorsList").getBinding("items"),
                    sKey = oEvent.getParameter("key"),
                    oThreshold = this.getSensorModel().getProperty("/threshold");

                if (sKey === "Cold") {
                    this._aStatusFilters = [new Filter("temperature/value", "LT", oThreshold.warm, false)];
                } else if (sKey === "Warm") {
                    this._aStatusFilters = [new Filter("temperature/value", "BT", oThreshold.warm, oThreshold.hot, false)];
                } else if (sKey === "Hot") {
                    this._aStatusFilters = [new Filter("temperature/value", "GT", oThreshold.hot, false)];
                } else {
                    this._aStatusFilters = [];
                }
                oBinding.filter(this._aStatusFilters.concat(this._aCustomerFilters));
            },
            onCustomerSelect: function(){
                if(!this._pDialog) {
                    this._pDialog = Fragment.load({
                        type: "XML",
                        name: "keepcool.sensormanager.view.CustomerSelectDialog",
                        controller: this
                    }).then(function(oDialog){
                        oDialog.setModel(this.getSensorModel(), "sensorModel");
                        oDialog.setModel(this.getView().getModel("i18n"), "i18n");
                        oDialog.setMultiSelect(true);
                        return oDialog;
                    }.bind(this));
                }
                this._pDialog.then(function(oDialog){
                    oDialog.open();
                });
            },
            onCustomerSelectChange: function(oEvent) {
                var sValue = oEvent.getParameter("value");
                var oFilter = new Filter("name", "Contains", sValue);
                var oBinding = oEvent.getSource().getBinding("items");
                oBinding.filter([oFilter]);
            },
            onCustomerSelectConfirm: function(oEvent) {
                var aSelectedItems = oEvent.getParameter("selectedItems");
                var oBinding = this.getView().byId("sensorsList").getBinding("items");
                this._aCustomerFilters = aSelectedItems.map(function(oItem) {
                    return new Filter("customer", "EQ", oItem.getTitle());
                });
                oBinding.filter(this._aCustomerFilters.concat(this._aStatusFilters));
            }
        });
    }
);