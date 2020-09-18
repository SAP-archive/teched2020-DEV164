[![code](https://flat.badgen.net/badge/code/available/green?icon=github)](https://github.com/SAP-samples/teched2020-DEV164/tree/code/ex9/TechEd2020)
[![demo](https://flat.badgen.net/badge/demo/deployed/blue?icon=chrome)](https://sap-samples.github.io/teched2020-dev164/exercises/ex9/TechEd2020/SensorManager/webapp/)

# Exercise 9 - Card with NumericHeader

In this exercise you will enhance the sensor status page with a `sap.f.Card` to show some detailed data about the sensor's status. You'll add some layouting with box controls and add a `sap.f.cards.NumericHeader` to properly display the temperature.

## Exercise 9.1 - Add a Card to SensorStatus.view.xml

Now, you'll pimp your `SensorStatus.view.xml`.

1. Open `SensorManager/webapp/view/SensorStatus.view.xml`.

2. Add `sap.f` and `sap.f.cards` libraries to `SensorStatus.view.xml`.

***SensorManager/webapp/view/SensorStatus.view.xml***

````xml
<mvc:View displayBlock="true"       
  controllerName="keepcool.SensorManager.controller.SensorStatus"
  xmlns:mvc="sap.ui.core.mvc"
  xmlns="sap.m"
  xmlns:f="sap.f"
  xmlns:card="sap.f.cards">
````

3. Add a `sap.f.Card` with a card header to `SensorStatus.view.xml` and the customer name as the title of the header via data binding.

***SensorManager/webapp/view/SensorStatus.view.xml***

````xml
<Page id="SensorStatusPage" title="{i18n>title}" showNavButton="true" navButtonPress=".navToSensors">
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

To be able to show the data in your card you need to assign the correct binding context by means of the information which is provided by the navigation step.

1. Open `SensorManager/webapp/controller/SensorStatus.controller.js`.

2. By assigning a callback function to the `routeMatched` event you are able to retrieve the information about the selected index. Based on this information you bind the according element to the current view. Also, you've to add the module `sap/base/strings/formatMessage` which let you format your localized text nicely.

***SensorManager/webapp/controller/SensorStatus.controller.js***

````js
sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/base/strings/formatMessage"
], function (Controller, formatMessage) {
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
    }
  });
});
````

3. Switch the browser tab where the application preview is opened. Click on a sensor. Now, the sensor status page contains a card with the customer name.
<br>![](images/09_02_0010.png)

## Exercise 9.3 - Add a NumericHeader to the Card

To improve the visualization further, you will replace the `sap.f.card.Header` by the `sap.f.cards.NumericHeader` in your newly created card.

1. Open `SensorManager/webapp/view/SensorStatus.view.xml` and add the following content.

***SensorManager/webapp/view/SensorStatus.view.xml***

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

2. Switch the browser tab where the application preview is opened. Click on a sensor. Now, the sensor status page contains a card with a nice temperature information.
<br>![](images/09_03_0010.png)

3. Add a formatter to add some semantic coloring for the card header.
The formatter needs the threshold and the current temperature from the model. Based on those it can return the correct `sap.m.ValueColor`. Open `SensorManager/webapp/controller/SensorStatus.controller.js` and add the following formatter function. Don't forget to import the `sap.m.ValueColor` module which provides nice color support.

***SensorManager/webapp/controller/SensorStatus.controller.js***

````js
sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/base/strings/formatMessage",
  "sap/m/ValueColor"
], function (Controller, formatMessage, ValueColor) {
  
  formatValueColor: function (oTreshold, iTemperature) {
    oTreshold = oTreshold || {};
    if (iTemperature < oTreshold.heated) {
        return ValueColor.Neutral;
    } else if (iTemperature >= oTreshold.heated && iTemperature < oTreshold.hot) {
        return ValueColor.Critical;
    } else {
        return ValueColor.Error;
    }
  }
````

4. The `sap.f.cards.NumericHeader` control provides a property `state` which allows you to render the state of the control fancy. Open `SensorManager/webapp/view/SensorStatus.view.xml`.

5. Add the `state` property to your numeric header and add the necessary data binding information pointing to your newly created formatter function.

***SensorManager/webapp/view/SensorStatus.view.xml***

````xml
<f:header>
  <card:NumericHeader 
    title="{parts: ['i18n>cardTitle', 'sensorModel>customer'], formatter: '.formatMessage'}"
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

6. Switch the browser tab where the application preview is opened. Click on a sensor. Now, the sensor status page contains a card with a fancy colored temperature information depending on the value of the temperature.
<br>![](images/09_03_0020.png)

## Summary

Yay! You've accomplished successfully [Exercise 9 - Card with NumericHeader](#exercise-9---card-with-numericheader). Stay tuned! 

Continue to [Exercise 10 - Chart with DataBinding](../ex10/README.md).

## Further Information
* Cards: https://ui5.sap.com/#/topic/5b46b03f024542ba802d99d67bc1a3f4
* `sap.f.Card`: https://ui5.sap.com/#/api/sap.f.Card
* `sap.f.cards.NumericHeader`: https://ui5.sap.com/#/api/sap.f.cards.NumericHeader
* Methods and Events for Navigation
: https://ui5.sap.com/#/topic/516e477e7e0b4e188b19a406e7528c1e