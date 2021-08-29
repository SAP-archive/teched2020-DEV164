[![solution](https://flat.badgen.net/badge/solution/available/green?icon=github)](../../../../tree/code/ex9)
[![demo](https://flat.badgen.net/badge/demo/deployed/blue?icon=chrome)](https://dirkelko.github.io/Developing-Apps-with-SAPUI5/ex9/sensormanager/webapp/)

# Exercise 9 - Card with NumericHeader

In this exercise you'll enhance the sensor status page with an `sap.f.Card` to show some more data about the sensor's status. You'll add some layouting with box controls and add an `sap.f.cards.NumericHeader` to properly display the temperature.

## Exercise 9.1 - Add a Card to SensorStatus.view.xml

Now you'll dress up the `SensorStatus.view.xml` view.

1. Open `sensormanager/webapp/view/SensorStatus.view.xml`.

2. Add the `sap.f` and `sap.f.cards` libraries to `SensorStatus.view.xml`.

***sensormanager/webapp/view/SensorStatus.view.xml***

````xml
<mvc:View displayBlock="true"       
  controllerName="keepcool.sensormanager.controller.SensorStatus"
  xmlns:mvc="sap.ui.core.mvc"
  xmlns="sap.m"
  xmlns:f="sap.f"
  xmlns:card="sap.f.cards">
````

3. Add an `sap.f.Card` with a card header to `SensorStatus.view.xml`. Enter the customer name as the header title via data binding.

***sensormanager/webapp/view/SensorStatus.view.xml***

````xml
    <Page id="SensorStatusPage" title="{i18n>titleSensorStatus}" showNavButton="true" navButtonPress=".navToSensors">
        <content>
            <VBox class="sapUiContentPadding">
            <f:Card>
                <f:header>
                <card:Header title="{parts: ['i18n>cardTitle', 'sensorModel>customer'], formatter: '.formatMessage'}"/>
                </f:header>
                <f:content>

                </f:content>
            </f:Card>
            </VBox>
        </content>
    </Page>
````

## Exercise 9.2 - Enhance SensorStatus.controller.js

To be able to show the data in your card, you need to assign the correct binding context using the information provided by the navigation step.

1. Open `sensormanager/webapp/controller/SensorStatus.controller.js`.

2. Attach a callback function to the `routeMatched` event to retrieve the selected index and bind it to the current view. Also add the module `sap/base/strings/formatMessage`, which formats your localized text nicely.

***sensormanager/webapp/controller/SensorStatus.controller.js***

````js
sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/base/strings/formatMessage"
], function (Controller, formatMessage) {
    "use strict";

  return Controller.extend("keepcool.sensormanager.controller.SensorStatus", {
      
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
    }
  });
});
````

3. Switch to the browser tab where the application preview is opened. Click any sensor. Now the sensor status page contains a card with the customer name.
<br><br>![](images/09_02_0010.png)<br><br>

## Exercise 9.3 - Add a NumericHeader to the Card

To improve the visualization further, you will replace the `sap.f.card.Header` by the `sap.f.cards.NumericHeader` in your newly created card.

1. Open `sensormanager/webapp/view/SensorStatus.view.xml` and add the following content:

***sensormanager/webapp/view/SensorStatus.view.xml***

````xml
                <f:header>
                    <card:NumericHeader
                        title="{parts: ['i18n>cardTitle','sensorModel>customer'], formatter: '.formatMessage'}"
                        subtitle="{parts: [
                        'i18n>cardSubTitle', 
                        'i18n>locationLabel', 
                        'sensorModel>location', 
                        'i18n>distanceLabel', 
                        'sensorModel>distance', 
                        'i18n>distanceUnit'], 
                        formatter: '.formatMessage'}"
                        number="{sensorModel>temperature/value}"
                        scale="{i18n>temperatureUnit}"/>
                </f:header>
````

2. Switch to the browser tab where the application preview is opened. Click any sensor. Now the sensor status page contains a card which includes temperature information.
<br><br>![](images/09_03_0010.png)<br><br>

3. Add a formatter to provide semantic coloring for the card header.
The formatter fetches both the threshold and the current temperature from the model. On the basis of these values it then returns the `sap.m.ValueColor`. 
Open `sensormanager/webapp/controller/SensorStatus.controller.js` and add the formatter function given below. Don't forget to import the `sap.m.ValueColor` module, which provides nice color support!

***sensormanager/webapp/controller/SensorStatus.controller.js***

````js
sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/base/strings/formatMessage",
  "sap/m/ValueColor"
], function (Controller, formatMessage, ValueColor) {
````

and

````js
        formatValueColor: function (oThreshold, iTemperature) {
            oThreshold = oThreshold || {};
            if (iTemperature < oThreshold.warm) {
                return ValueColor.Neutral;
            } else if (iTemperature >= oThreshold.warm && iTemperature < oThreshold.hot) {
                return ValueColor.Critical;
            } else {
                return ValueColor.Error;
            }
        }
````

4. The `sap.f.cards.NumericHeader` control provides a `state` property, which allows you to render the state of your control in a fancy way. Open `sensormanager/webapp/view/SensorStatus.view.xml`.

5. Add the `state` property to your numeric header and enter data binding information pointing to your newly created formatter function.

***sensormanager/webapp/view/SensorStatus.view.xml***

````xml
                <f:header>
                    <card:NumericHeader
                        title="{parts: ['i18n>cardTitle','sensorModel>customer'], formatter: '.formatMessage'}"
                        subtitle="{parts: [
                        'i18n>cardSubTitle', 
                        'i18n>locationLabel', 
                        'sensorModel>location', 
                        'i18n>distanceLabel', 
                        'sensorModel>distance', 
                        'i18n>distanceUnit'], 
                        formatter: '.formatMessage'}"
                        number="{sensorModel>temperature/value}"
                        scale="{i18n>temperatureUnit}"
                        state="{parts: [
                        'sensorModel>/threshold', 
                        'sensorModel>temperature/value'],
                        formatter: '.formatValueColor'}"/>
                </f:header>
````

6. Switch to the browser tab where the application preview is opened. Click any sensor. Now the sensor status page contains a card with colored temperature information depending on the value of the temperature.
<br><br>![](images/09_03_0020.png)<br><br>

## Summary

Yay! You've successfully completed [Exercise 9 - Card with NumericHeader](#exercise-9---card-with-numericheader). Stay tuned! 

Continue to [Exercise 10 - Chart with Data Binding](../ex10/README.md).

## Further Information
* Cards: https://ui5.sap.com/#/topic/5b46b03f024542ba802d99d67bc1a3f4
* `sap.f.Card`: https://ui5.sap.com/#/api/sap.f.Card
* `sap.f.cards.NumericHeader`: https://ui5.sap.com/#/api/sap.f.cards.NumericHeader
* Methods and Events for Navigation
: https://ui5.sap.com/#/topic/516e477e7e0b4e188b19a406e7528c1e
