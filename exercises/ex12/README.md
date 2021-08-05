[![solution](https://flat.badgen.net/badge/solution/available/green?icon=github)](https://github.com/SAP-samples/teched2020-DEV164/tree/code/ex12/TechEd2020)
[![demo](https://flat.badgen.net/badge/demo/deployed/blue?icon=chrome)](https://sap-samples.github.io/teched2020-DEV164/ex12/TechEd2020/SensorManager/webapp/)

# Exercise 12 - Develop your own Control

In this exercise you'll enhance the sensor status page with an `sap.f.Card` to show some more data about the sensor's status. You'll add some layouting with box controls and add an `sap.f.cards.NumericHeader` to properly display the temperature.

## Exercise 12.1 - Create the custom control code

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

## Exercise 12.2 - Enhance SensorStatus.controller.js

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


## Further Information
* Cards: https://ui5.sap.com/#/topic/5b46b03f024542ba802d99d67bc1a3f4
* `sap.f.Card`: https://ui5.sap.com/#/api/sap.f.Card
* `sap.f.cards.NumericHeader`: https://ui5.sap.com/#/api/sap.f.cards.NumericHeader
* Methods and Events for Navigation
: https://ui5.sap.com/#/topic/516e477e7e0b4e188b19a406e7528c1e
