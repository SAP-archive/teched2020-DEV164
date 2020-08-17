[![code](https://flat.badgen.net/badge/code/available/green?icon=github)](https://github.com/SAP-samples/teched2020-DEV164/tree/code/ex8/TechEd2020)
[![demo](https://flat.badgen.net/badge/demo/deployed/blue?icon=chrome)](https://sap-samples.github.io/teched2020-dev164/exercises/ex8/TechEd2020/SensorManager/webapp/)

# Exercise 8 - Second View with Navigation

For sure, the customer does not only want to have the broad overview of all their icehouses. In case of an error they would like to inspect a sensor for how the temperature developed recently. You'll introduce a second view, where you display even more of the available data.

## Exercise 8.1 - Create SensorStatus.view.xml

Offering a new view leads to creating a new one.

1. Go to folder `SensorManager/webapp/view/`.

2. Perform a right click on the `view` folder and click on `New File`.
<br>![](images/08_01_0010.png)

3. Enter `SensorStatus.view.xml` as file name.
<br>![](images/08_01_0020.png)

4. Add an empty `sap.m.Page` to the newly created view.

***SensorManager/webapp/view/SensorStatus.view.xml***

````xml
<mvc:View displayBlock="true"
	xmlns:mvc="sap.ui.core.mvc"
	xmlns="sap.m">
	<Page id="SensorStatusPage" title="{i18n>titleSensorStatus}" showNavButton="true">
	</Page>
</mvc:View>
````

## Exercise 8.2 - Configure the manifest.json

After creating the new view, you have to configure the view in the `manifest.json` to support routing for this view.

1. Open `SensorManager/webapp/manifest.json`.

2. Go to section `sap.ui5` / `routing` / `routes`.

3. Add a new entry in the `routes` configuration. Note, that the new route contains a patch segment in brackets: `{index}`. This will later pass the currently selected sensor as a parameter in the browser hash.

***SensorManager/webapp/manifest.json***

````json
"routes": [
{
    "name": "RouteSensorStatus",
    "pattern": "sensor/{index}",
    "target": ["TargetSensorStatus"]
}
````

4. Go to section `sap.ui5` / `routing` / `targets`.

5. Add a new entry in the `targets` configuration where you have to pass `SensorStatus` as the `viewName`.

***SensorManager/webapp/manifest.json***

````json
"TargetSensorStatus": {
    "viewId": "sensorStatus",
    "viewName": "SensorStatus",
    "viewLevel": 2
}
````

6. Lets see if the newly created view can be opened. Therefore switch to the browser tab with the opened application preview. Add `#sensor/0` at the end of the browser hash. Perform a reload of the page. The UI5 application is refreshed and the newly created page is displayed.
<br>![](images/08_02_0010.png)

## Exercise 8.3 - Implement the navigation to the new view

Fine. You can access the newly created view. Now, you have to implement logic to navigate from your first view to the newly created view.

1. Open `SensorManager/webapp/controller/Sensors.controller.js`.

2. Create the function `navToSensorStatus`. Here you get the index of the currently selected sensor and navigate to new view by passing also the index of the sensor.

***SensorManager/webapp/controller/Sensors.controller.js***

````js
navToSensorStatus: function(oEvent) {
    var iSensorIndex = oEvent.getSource().getBindingContext("sensorModel").getProperty("index");
    this.getOwnerComponent().getRouter().navTo("RouteSensorStatus", {index: iSensorIndex});
}
````

## Exercise 8.4 - Assign the navigation logic to the sensor items

After implementing the navigation logic you have to assign it to a control.

1. Open `SensorManager/webapp/view/Sensors.view.xml`.

2. Add the `press` attribute to the `sap.m.CustomListItem` and assign the newly created function.

***SensorManager/webapp/view/Sensors.view.xml***

````xml
<CustomListItem type="Active" press=".navToSensorStatus">
````

3. Lets see if the navigation logic works. Therefore switch to the browser tab with the opened application preview. Remove any entered content after the `index.html`. Perform a reload of the page. Click on any prefered sensor. The navigation took place and you see the newly created view.
<br>![](images/08_04_0010.png)

## Exercise 8.5 - Create SensorStatus.controller.js
Nice. Now, lets implement the navigation back to the `Sensors.view.xml`. Therefore you need a new controller for the newly created view.

1. Go to folder `SensorManager/webapp/controller/`.

2. Perform a right click on the `controller` folder and click on `New File`.
<br>![](images/08_05_0010.png)

3. Enter `SensorStatus.controller.js` as file name.
<br>![](images/08_05_0020.png)

4. Copy and paste the empty controller definition into the newly created `SensorStatus.controller.js`.

***SensorManager/webapp/controller/SensorStatus.controller.js***

````js
sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("keepcool.SensorManager.controller.SensorStatus", {

	});
});
````

5. Open `SensorManager/webapp/view/SensorStatus.view.xml`.

6. Assign the newly created controller to the view with the attribute `controllerName`.

````xml
<mvc:View 
    controllerName="keepcool.SensorManager.controller.SensorStatus" 
  displayBlock="true" 
	xmlns:mvc="sap.ui.core.mvc" 
  xmlns="sap.m">
  ````

## Exercise 8.6 - Implement navigation back to Sensors.view.xml

Now, you have to implement the navigation logic.

1. Open `SensorManager/webapp/controller/SensorStatus.controller.js`.

2. Add the function `navToSensors` which uses the `navTo` function to navigate to the `RouteSensors` route which points to the `Sensors.view.xml`.

***SensorManager/webapp/controller/SensorStatus.controller.js***

````js
return Controller.extend("keepcool.SensorsTest.controller.SensorStatus", {
	navToSensors: function() {
		this.getOwnerComponent().getRouter().navTo("RouteSensors");
	}
});
````

3. Open `SensorManager/webapp/view/SensorStatus.view.xml`.

4. Add the `navButtonPress` attribute to the `sap.m.Page` and assign the newly created function `navToSensors`.

***SensorManager/webapp/view/SensorStatus.view.xml***

````xml
<Page id="SensorStatusPage" title="{i18n>title}" showNavButton="true" navButtonPress=".navToSensors">
</Page>
````

5. Lets see if the navigation logic works. Therefore switch to the browser tab with the opened application preview. Remove any entered content after the `index.html`. Perform a reload of the page. 
<br>![](images/08_06_0010.png)

6. Click on any prefered sensor. The navigation took place and you see the newly created view.
<br>![](images/08_06_0020.png)

7. Now, press the "&#8592;" button and with that you'll navigate back to the sensor list.
<br>![](images/08_06_0030.png)

## Summary

Congratulations, you achieved the [Exercise 8 - Second View with Navigation](#exercise-8---second-view-with-navigation) exercise.

Continue to [Exercise 9 - Card with NumericHeader](../ex9/README.md).


## Further Information

* Routing in UI5: https://ui5.sap.com/#/topic/902313063d6f45aeaa3388cc4c13c34e)