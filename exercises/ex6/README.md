[![solution](https://flat.badgen.net/badge/solution/available/green?icon=github)](https://github.com/SAP-samples/teched2020-DEV164/tree/code/ex6)
[![demo](https://flat.badgen.net/badge/demo/deployed/blue?icon=chrome)](https://sap-samples.github.io/teched2020-DEV164/ex6/sensormanager/webapp/)

# Exercise 6 - Filtering With the IconTabBar

As your customer needs the full overview to make decisions quickly, you will give them an option to narrow down the list of sensors based on the current sensor temperature.

## Exercise 6.1 - Add new IconTabFilters to the Sensors.view.xml

For this, we enhance our `sap.m.IconTabBar` control.

1. Open `SensorManager/webapp/view/Sensors.view.xml`.

2. Add `sap.m.IconTabFilter` elements to the `items` aggregation of the `sap.m.IconTabBar` control. They will be visible as icons above the bar, so that the user can click them to filter the list.

***SensorManager/webapp/view/Sensors.view.xml***

````xml
<IconTabBar id="idIconTabBar" class="sapUiResponsiveContentPadding">
    <items>
        <IconTabFilter showAll="true" text="{i18n>msgFilterAll}" key="All"/>
        <IconTabSeparator/>
        <IconTabFilter icon="sap-icon://fridge" iconColor="Default" text="{i18n>msgFilterCold}" key="Cold"/>
        <IconTabFilter icon="sap-icon://blur" iconColor="Critical" text="{i18n>msgFilterWarm}" key="Warm"/>
        <IconTabFilter icon="sap-icon://warning" iconColor="Negative" text="{i18n>msgFilterHot}" key="Hot"/>
    </items>
    <content>
````

3. Let's see if your UI5 application now displays the newly introduced `sap.m.IconTabFilter` elements! Switch to the browser tab with the opened application preview and reload the page.
<br><br>![](images/06_01_0010.png)<br><br>

## Exercise 6.2 - Implement the Filtering

In the previous section you've added all necessary controls. Next, you'll implement the filtering logic.

1. Open `SensorManager/webapp/controller/Sensors.controller.js`.

2. Add the module `sap/ui/model/Filter` as a dependency to `Sensors.controller.js`.

***SensorManager/webapp/controller/Sensors.controller.js***

````js
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/IconColor",
    "sap/m/MessageToast",
    "sap/ui/model/Filter"
    ], function (Controller, IconColor, MessageToast, Filter) {
    "use strict";
````

3. Implement the `onSensorSelect` function for filtering the sensor list items by checking their `status` property. We'll also make use of the previously defined threshold and use some filter settings to narrow down the result. `LT` for example means "less than".

***SensorManager/webapp/controller/Sensors.controller.js***

````js
onSensorSelect: function (oEvent) {
    this._aCustomerFilters = [];
    this._aStatusFilters = [];

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

    oBinding.filter(this._aStatusFilters);
}
````

## Exercise 6.3 - Assign the Filtering to the IconTabBar

The filtering logic is written. Next, you need to assign the filtering function to the binding of the `sap.m.IconTabBar`.

1. Open `SensorManager/webapp/view/Sensors.view.xml`.

2. Bind the `onSensorSelect` function to the `select` event of the `IconTabBar`. Whenever one of the `sap.m.IconTabFilter` elements is clicked, this function will be called.

***SensorManager/webapp/view/Sensors.view.xml***

````xml
<IconTabBar id="idIconTabBar" select=".onSensorSelect" class="sapUiResponsiveContentPadding">
````

3. Let's see if your UI5 application is now able to filter the sensor data correctly. Switch to the browser tab with the opened application preview and reload the page. Click the *Too Hot* icon. Only sensors with too high a temperature are displayed.
<br><br>![](images/06_03_0010.png)<br><br>

## Exercise 6.4 - Display the Total Number of Sensors in Every IconTabFilter

Your customer wishes to display the total number of sensors as well. For this, you can introduce the `count` property of `sap.m.IconTabFilter`.

1. Open `SensorManager/webapp/view/Sensors.view.xml`.

2. Make use of an expression binding by adding the `count` property and the expression binding `{=${sensorModel>/sensors}.length}`.

***SensorManager/webapp/view/Sensors.view.xml***

````xml
<IconTabBar id="idIconTabBar" select=".onSensorSelect" class="sapUiResponsiveContentPadding">
    <items>
        <IconTabFilter showAll="true" text="{i18n>msgFilterAll}" key="All" count="{=${sensorModel>/sensors}.length}"/>
````

3. Let's see if your UI5 application can display the total number of sensors correctly. Switch to the browser tab with the opened application preview and reload the page. Do you see *100*? Yeah!
<br><br>![](images/06_04_0010.png)<br><br>

## Summary

Hooray! You've successfully completed [Exercise 6 - Filtering with the IconTabBar](#exercise-6---filtering-with-the-icontabbar).

Continue to [Exercise 7 - Fragment containing a SelectDialog](../ex7/README.md).

## Further Information

* Model Filter in UI5: https://ui5.sap.com/#/topic/5295470d7eee46c1898ee46c1b9ad763
* Expression Binding: https://ui5.sap.com/#/topic/daf6852a04b44d118963968a1239d2c0
