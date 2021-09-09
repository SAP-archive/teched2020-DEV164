sap.ui.define([
    "sap/ui/core/Control"
], function (Control) {
	"use strict";
	return Control.extend("keepcool.sensormanager.control.Thermometer", {
		metadata : {
			properties : {
				value: {type : "float", defaultValue : 0},
				color: {type : "sap.ui.core.CSSColor"}
			}
		},
		
        renderer : {
            apiVersion : 2,
            render : function (oRM, oControl) {
                oRM.openStart("figure", oControl);
                oRM.class("thermometer");
                oRM.style("border", "2px solid " + oControl.getColor());
                oRM.openEnd();

                    oRM.openStart("figcaption");
                    oRM.class("thermometer-value");
                    oRM.style("background-color", oControl.getColor());
				    oRM.style("box-shadow", "0 0 0 2px " + oControl.getColor());
                    oRM.openEnd();
                    oRM.text(oControl.getValue().toFixed(1));
                    oRM.close("figcaption");

                    oRM.openStart("div");
                    oRM.class("thermometer-level");
                    var temperatureHeight = Math.min(oControl.getValue() * 7, 50) + 5; // values should range from 5 to 55
                    oRM.style("height", temperatureHeight + "px");
                    oRM.style("background-color", oControl.getColor());
                    oRM.openEnd();
                    oRM.close("div");

                oRM.close("figure");
            }
        }
	});
});