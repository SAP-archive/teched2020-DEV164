# Exercise 7 - Fragment containing a SelectDialog

For the employees of your customer, not all of their icehouse customers might be relevant for them. You have to add some kind of basic personalization to the application, by providing a dialog, in which they can select only the relevant icehouses customers.

## Exercise 7.1 - Create a new Fragment Definition

A dialog is a perfect scenario, where you can use a `sap.ui.core.Fragment`. This UI5 artefacts allows you to modularize your code in smaller resuable pieces.

1. Go to folder `SensorTest/webapp/view/`.

2. Perform a right click on the `view` folder and click on `New File`.
<br>![](images/07_01_0010.png)

3. Enter `CustomerSelectDialog.fragment.xml` as file name.
<br>![](images/07_01_0020.png)

4. Copy and paste following content into the newly created `CustomerSelectDialog.fragment.xml`. With that you create a `sap.m.SelectDialog` which offeres functionality to select the prefered icehouse customers.

***SensorTest/webapp/view/CustomerSelectDialog.fragment.xml***

````xml
<core:FragmentDefinition
    xmlns="sap.m"
    xmlns:core="sap.ui.core">
    <SelectDialog
        title="{i18n>titleSelectCustomer}"
        contentHeight="38.3%"
        rememberSelections="true"
        items="{
            path: 'sensorModel>/customers',
            sorter: {path:'name'}
        }" >
        <StandardListItem title="{sensorModel>name}"/>
    </SelectDialog>
</core:FragmentDefinition>
````

## Exercise 7.2 - Implement the Dialog Opening Logic

After creating the dialog you have to implement the coding to open the dialog.

1. Open `SensorTest/webapp/controller/Sensors.controller.js`.

2. Add module `sap/ui/core/Fragment`.

***SensorTest/webapp/controller/Sensors.controller.js***

````js
sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/IconColor",
	"sap/m/MessageToast",
    "sap/ui/model/Filter",
    "sap/ui/core/Fragment"
], function (Controller, IconColor, Toast, Filter, Fragment) {
````

3. Implement the `onCustomerSelect` function to open the dialog. In there you have to load the Fragment and set the according model and properties.

***SensorTest/webapp/controller/Sensors.controller.js***

````js
onCustomerSelect: function (oEvent) {
    if (this._oDialog) {
        this._oDialog.open();
    } else {
        Fragment.load({
            type: "XML",
            name: "keepcool.SensorTest.view.CustomerSelectDialog",
            controller: this
        }).then(function(oDialog) {
            this._oDialog = oDialog;
            this._oDialog.setModel(this._oSensorModel, "sensorModel");
            this._oDialog.setModel(this.getView().getModel("i18n"), "i18n");
            this._oDialog.setMultiSelect(true);
            this._oDialog.open();
        }.bind(this));
    }
}
````

## Exercise 7.3 - Add a Dialog Opening Button
After implementing the dialog opening logic its time for assigning this logic to a control.

1. Open `SensorTest/webapp/view/Sensors.view.xml`.

2. Add a new menu button to the paage header and bind the `press` event to the newly created `onCustomerSelect` function.

***SensorTest/webapp/view/Sensors.view.xml***

````xml
<Page>
    <headerContent>
        <Button icon="sap-icon://menu" press=".onCustomerSelect" tooltip="Select Customer" />
    </headerContent>
    <content>
````

3. Switch the browser tab to the application preview and perform a refresh to see how the UI5 application changed its user interface. Click on the menu button in upper right corner.
<br>![](images/07_03_0010.png)

## Exercise 7.4 - Implement the Filter Customer Logic

The Dialog contains an input field where the user can search for the customer name.
Now, its on you to implement this logic.

1. Open `SensorTest/webapp/controller/Sensors.controller.js`. 

2. Add the `onCustomerSelectChange` function with following content.

***SensorTest/webapp/controller/Sensors.controller.js***

````js
onCustomerSelectChange: function(oEvent) {
    var sValue = oEvent.getParameter("value");
    var oFilter = new Filter("name", "Contains", sValue);
    var oBinding = oEvent.getSource().getBinding("items");
    oBinding.filter([oFilter]);
}
````

## Exercise 7.5 - Implement the Select Customer Logic

Now, you have to implement the logic to filter your sensors after selecting your prefered customers.

1. Open `SensorTest/webapp/controller/Sensors.controller.js`. 

2. Add the `onCustomerSelectConfirm` function with following content.

***SensorTest/webapp/controller/Sensors.controller.js***

````js
onCustomerSelectConfirm: function(oEvent) {
    var aSelectedItems = oEvent.getParameter("selectedItems");
    var oBinding = this.getView().byId("sensorsList").getBinding("items");
    this._aCustomerFilters = aSelectedItems.map(function(oItem) {
        return new Filter("customer", "EQ", oItem.getTitle());
    });
    oBinding.filter(this._aCustomerFilters.concat(this._aStatusFilters));
}
````

3. To ensure that both filters (customer and status) are applied you need to make two more adaptations in the `Sensors.controller.js` by declaring the `_aCustomerFilters` and `_aStatusFilters` in the `onInit` function to ensure that these fields are defined and merging the `_aCustomerFilters` with the `_aStatusFilters` before performing the fitering on the binding.

***SensorTest/webapp/controller/Sensors.controller.js***

````js
onInit: function () {
    this._aCustomerFilters = [];
    this._aStatusFilters = [];
````

***SensorTest/webapp/controller/Sensors.controller.js***

````js
onSensorSelect: function (oEvent) {
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
}
````

## Exercise 7.6 - Assign the Customer Change and Select Logic to the Dialog

One last thing is missing. You've to assign the newly created functions to the dialog.

1. Open `SensorTest/webapp/view/CustomerSelectDialog.fragment.xml`

2. Add the newly created functions to the `confirm` and `liveChange` events.

***SensorTest/webapp/view/CustomerSelectDialog.fragment.xml***

````xml
<SelectDialog
    title="Select Customers"
    contentHeight="38.3%"
    rememberSelections="true"
    confirm=".onCustomerSelectConfirm"
    liveChange=".onCustomerSelectChange"
````

3. Its demo time! Switch the browser tab to the application preview and perform a refresh to see how the UI5 application changed its user interface. Click on the *menu* button in upper right corner. Enter some parts of customers and see if the customer list is filtered.
<br>![](images/07_06_0010.png)

4. Select your prefered customers and click on the *Select* button
<br>![](images/07_06_0020.png)

5. The list of sensors is filtered by the temperature state and the prefered customers.
<br>![](images/07_06_0030.png)

## Summary

Yay! You've accomplished successfully [Exercise 7 - Fragment containing a SelectDialog](#exercise-7---fragment-containing-a-selectdialog).

Continue to [Exercise 8 - Second View with Navigation](../ex8/README.md).

## Further Information
* (Usage of Fragments in UI5: https://ui5.sap.com/#/topic/d6af195124cf430599530668ddea7425)
* `sap.m.SelectDialog`: https://ui5.sap.com/#/api/sap.m.SelectDialog