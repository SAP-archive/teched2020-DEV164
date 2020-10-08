[![solution](https://flat.badgen.net/badge/solution/available/green?icon=github)](https://github.com/SAP-samples/teched2020-DEV164/tree/code/ex5/TechEd2020)
[![demo](https://flat.badgen.net/badge/demo/deployed/blue?icon=chrome)](https://sap-samples.github.io/teched2020-dev164/exercises/ex5/TechEd2020/SensorManager/webapp/)

# Exercise 5 - Improve Visualization

You achieved a lot in the previous exercises. Now it's time to dress up your UI5 application with some visual effects!

## Exercise 5.1 - Enhance Sensors.view.xml

To give the customer the best possible overview, add some color to your application. Introduce a new layout and structure for the item, and also show an `sap.ui.core.Icon` there.

1. Open `Sensors.view.xml` and add the xml namespace `xmlns:core="sap.ui.core` to the view to have the `sap.ui.core.Icon` available.

***SensorManager/webapp/view/Sensors.view.xml***

````xml
<mvc:View
    xmlns:core="sap.ui.core"
    xmlns:mvc="sap.ui.core.mvc"
    xmlns:grid="sap.ui.layout.cssgrid"
    xmlns:f="sap.f"
    xmlns="sap.m"
    displayBlock="true">
````

2. Add a temperature icon as well as layouting to the `sap.m.CustomListItem` control. `sapUiSmallMarginTop` and `sapUiSmallMarginEnd` are predefined device agnostic css classes, which add spacing to controls. `sap.m.HBox`and `sap.m.VBox` are helpers for layouting your application.

***SensorManager/webapp/view/Sensors.view.xml***

````xml
<CustomListItem type="Active">
    <layoutData>
        <FlexItemData growFactor="1" shrinkFactor="0"/>
    </layoutData>
    <HBox justifyContent="SpaceBetween">
        <VBox justifyContent="SpaceBetween" class="sapUiSmallMarginTop sapUiSmallMarginBegin">
            <Title text="{sensorModel>location}"/>
            <Label text="{i18n>distanceLabel}:"/>
        </VBox>
        <core:Icon src="sap-icon://temperature" size="2.5rem" class="sapUiSmallMarginTop sapUiSmallMarginEnd"/>
    </HBox>
    <HBox justifyContent="SpaceBetween" class="sapUiTinyMarginTop sapUiSmallMarginBottom sapUiSmallMarginBeginEnd">
        <ObjectNumber number="{sensorModel>distance}" unit="{i18n>distanceUnit}"/>
    </HBox>
</CustomListItem>
````

## Exercise 5.2 - Create Sensors.controller.js

In this exercise you'll enhance your application with some additional controller coding. 

1. Go to folder `SensorManager/webapp/controller/`.

2. Right-click on the `controller` folder and select `New File`.
<br><br>![](images/05_02_0010.png)<br><br>

3. Enter `Sensors.controller.js` as the file name.
<br><br>![](images/05_02_0020.png)<br><br>

4. All functions defined in the Controller can be used in your View. This gives you more flexibility to implement specific functionality to improve the visualization in your View. Copy and paste the following code into `Sensors.controller.js`:

***SensorManager/webapp/controller/Sensors.controller.js***

````js
sap.ui.define([
    "sap/ui/core/mvc/Controller"
  ],
  function (Controller) {
    "use strict";

    return Controller.extend("keepcool.SensorsTest.controller.Sensors", {
      onInit: function () {

      }
    });
  });
````

5. Add the modules `sap/ui/core/IconColor` and `sap/m/MessageToast` as dependencies to the `Sensors.controller.js`. You'll use them later on during this exercise.

***SensorManager/webapp/controller/Sensors.controller.js***

````js
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/IconColor",
    "sap/m/MessageToast"
    ], function (Controller, IconColor, MessageToast) {
    "use strict";
````

6. Your next goal is to show an `sap.m.MessageToast` when your sensor data is loaded. Paste the following content into the `onInit` function of `Sensors.controller.js`. This also adds a function `getSensorModel` to retrieve the sensor model.

***SensorManager/webapp/controller/Sensors.controller.js***

````js
onInit: function() {
    this.getSensorModel().dataLoaded().then(function() {
        MessageToast.show(this.getOwnerComponent().getModel("i18n").getResourceBundle().getText("msgSensorDataLoaded"), { closeOnBrowserNavigation: false });
    }.bind(this));
},
getSensorModel: function(){
    return this.getOwnerComponent().getModel("sensorModel");
}
```` 

## Exercise 5.3 - Assign Controller to View

Now you need to tell your view which controller is associated with it. 

1. Open `SensorManager/webapp/view/Sensors.view.xml`.

2. Add the `controllerName` attribute to the view and enter the controller name `keepcool.SensorManager.controller.Sensors`. The Controller's functions can then be used in your View. UI5 maps this path to the `SensorManager/webapp/controller/Sensors.controller.js` file.

***SensorManager/webapp/view/Sensors.view.xml***

````xml
<mvc:View
    controllerName="keepcool.SensorManager.controller.Sensors"
    xmlns:core="sap.ui.core"
    xmlns:mvc="sap.ui.core.mvc"
    xmlns:grid="sap.ui.layout.cssgrid"
    xmlns:f="sap.f"
    xmlns="sap.m"
    displayBlock="true">
````

3. Let's see if your UI5 application is able to show the `sap.m.MessageToast`! Switch to the browser tab with the opened application preview and reload the page. The `sap.m.MessageToast` should be displayed to confirm that your sensor data has been loaded successfully.
<br><br>![](images/05_03_0010.png)<br><br>

## Exercise 5.4 - Create your First Formatter

Your next goal is to bring some color to the user interface. You'd like to display the icon in a suitable color which is based on the actual temperature of the sensor. To do this, you can use the formatter concept of UI5.

1. Open `SensorManager/webapp/controller/Sensors.controller.js`. 

2. Add the new function `formatIconColor`. 

***SensorManager/webapp/controller/Sensors.controller.js***

````js
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
}
````

## Exercise 5.5 - Add the Formatter in your View


You're almost done. The last piece is adding the newly created formatter function to the binding of your icon.

1. Open `SensorManager/webapp/view/Sensors.view.xml`. 

2. Add the `color` property to the `sap.ui.core.Icon` definition, bind the `color` property to the path `sensors>temperature/value`, and assign the formatter function to the binding.

***SensorManager/webapp/view/Sensors.view.xml***

````xml
<core:Icon src="sap-icon://temperature" size="2.5rem"
    color="{path: 'sensorModel>temperature/value', formatter:'.formatIconColor'}"
    class="sapUiSmallMarginTop sapUiSmallMarginEnd"/>
````

3. Let's see if your UI5 application can now color icons depending on the sensor data! Switch to the browser tab with the opened application preview and reload the page. The sensor icons should be displayed either in blue (default), yellow (critical) or red (negative).
<br><br>![](images/05_05_0010.png)<br><br>

## Summary

Congratulations, you completed the [Exercise 5 - Improve Visualization](#xxercise-5---improve-visualization) exercise!

Continue to [Exercise 6 - Filtering with the IconTabBar](../ex6/README.md).

## Further Information

* Model View Controller Concept: https://ui5.sap.com/#/topic/91f233476f4d1014b6dd926db0e91070 
* Controller: https://ui5.sap.com/#/topic/121b8e6337d147af9819129e428f1f75
* Formatting, Parsing, and Validating Data: https://ui5.sap.com/#/topic/07e4b920f5734fd78fdaa236f26236d8
