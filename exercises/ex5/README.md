# Exercise 5 - Improve Visualization
You achieved a lot in the previous exercises. Now, its time to pimp your UI5 application with some visual effects.

## Exercise 5.1 - Enhance Sensors.view.xml
To give the customer the best possible overview, add some color to your application! Therefore you introduce a new layout and structure for the item and also show an `sap.ui.core.Icon` there.

1. Open `Sensors.view.xml` and add the xml namespace `xmlns:core="sap.ui.core` to the view to have the `sap.ui.core.Icon` available.

***SensorTest/webapp/view/Sensors.view.xml***

````xml
...
<mvc:View
    xmlns:core="sap.ui.core"
    xmlns:mvc="sap.ui.core.mvc"
    xmlns:grid="sap.ui.layout.cssgrid"
    xmlns:f="sap.f"
    xmlns="sap.m"
    displayBlock="true">
...
````

2. Add a temperature icon and layouting to the `sap.m.CustomListItem`. `sapUiSmallMarginTop` and `sapUiSmallMarginEnd` are predefined device agnostic css classes which add spacing to controls. `sap.m.HBox`and `sap.m.VBox` are helpers for layouting your application.

***SensorTest/webapp/view/Sensors.view.xml***

````xml
<CustomListItem type="Active">
    <layoutData>
        <FlexItemData growFactor="1" shrinkFactor="0"/>
    </layoutData>
    <HBox justifyContent="SpaceBetween">
        <VBox justifyContent="SpaceBetween" class="sapUiSmallMarginTop sapUiSmallMarginBegin">
            <Title text="{sensors>location}"/>
            <Label text="{i18n>distanceLabel}:"/>
        </VBox>
        <core:Icon src="sap-icon://temperature" size="2.5rem"
            class="sapUiSmallMarginTop sapUiSmallMarginEnd"/>
    </HBox>
  <HBox justifyContent="SpaceBetween" class="sapUiTinyMarginTop sapUiSmallMarginBottom sapUiSmallMarginBeginEnd">
        <ObjectNumber number="{sensors>distance}" unit="{i18n>distanceUnit}"/>
    </HBox>
</CustomListItem>
````

## Exercise 5.2 - Create Sensors.controller.js


## Exercise 5.3 - Assign Controller to View


## Summary

Congratulations, you achieved the [Exercise 5 - Improve Visualization](#xxercise-5---improve-visualization) exercise.

Continue to [Exercise 6 - Filtering with the IconTabBar](../ex6/README.md).

## Further Information
* Model View Controller Concept: https://ui5.sap.com/#/topic/91f233476f4d1014b6dd926db0e91070 
* Controler: https://ui5.sap.com/#/topic/121b8e6337d147af9819129e428f1f75
