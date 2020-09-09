# Exercise 2 - Basic UI5 Configuration and View Creation

In this exercise, you will add content to your application. A new UI5 view showing multiple sensors will be the first part of your app.

## Exercise 2.1 - Switch to SAP Fiori 3

SAP Fiori 3 is SAP’s new target design system, which evolves the SAP Fiori design for all SAP products to fully support the Intelligent Suite, running on any device. Its succeed SAP Fiori 2.0. Per default the SAP Business Application Studio generates the UI5 project based on SAP Fiori 2.0. In your UI5 application the SAP Fiori version is controlled by the UI5 theme. The configuration of the UI5 theme is done in `SensorTest/webapp/index.html`. If you wanna stick with SAP Fiori 2.0 continue with [Exercise 2.2 - Create Sensors.view.xml](#exercise-22---create-sensorsviewxml).

1. Open `SensorTest/webapp/index.html`.

2. Replace the `sap_belize` value of the attribute `data-sap-ui-theme` with `sap_fiori_3`.

***SensorTest/webapp/index.html***

````html
<script id="sap-ui-bootstrap"
    src="https://sapui5.hana.ondemand.com/resources/sap-ui-core.js"
    data-sap-ui-theme="sap_fiori_3"
    data-sap-ui-resourceroots='{"keepcool.SensorTest": "./"}'
    data-sap-ui-compatVersion="edge"
    data-sap-ui-oninit="module:sap/ui/core/ComponentSupport"
    data-sap-ui-async="true"
    data-sap-ui-frameOptions="trusted">
</script>
````

## Exercise 2.2 - Create Sensors.view.xml

After completing these steps you will have written your first UI5 view.

1. Perfom a right click on the `SensorTest/webapp/view` folder. A new menu opens where you have to click on `New File`.
<br>![](/exercises/ex2/images/02_02_0010.png)

2. Enter `Sensors.view.xml` as the new file name and press *OK*.
<br>![](/exercises/ex2/images/02_02_0020.png)

3. Now, Its time for adding some first content to your newly created UI5 view. Its an empty `sap.m.IconTabBar`.

***SensorTest/webapp/view/Sensors.view.xml***

````xml
<mvc:View
    xmlns:mvc="sap.ui.core.mvc"
    xmlns="sap.m"
    displayBlock="true">
    <Page id="page" title="{i18n>title}">
        <content>
            <IconTabBar id="iconTabBar" class="sapUiResponsiveContentPadding">
                <content>
                </content>
            </IconTabBar>
        </content>
    </Page>
</mvc:View>
````

## Exercise 2.3 - Add Dependencies

You will use several UI5 libraries like `sap.m` or `sap.f` in your application. The central point of configuring your UI5 application is the `manifest.json` which is located under `SensorTest/webapp/manifest.json`.

1. Open `SensorTest/webapp/manifest.json`.
2. Go to the section `sap.ui5`.
3. Add the `sap.m`, `sap.f` and `sap.suite.ui.microchart` libraries to the `dependencies/libs` section. For all the listed libraries, UI5 takes care of loading these libraries when your app is started.

***SensorTest/webapp/manifest.json***

````json
"dependencies": {
    "minUI5Version": "1.60.1",
    "libs": {
        "sap.ui.core": {},
        "sap.ui.layout": {},
        "sap.m": {},
        "sap.f": {},
        "sap.suite.ui.microchart": {}
    }
},
````

## Exercise 2.4 - Enable Routing for Sensors.view.xml

UI5 comes with a powerful routing API that helps you control the state of your application efficiently. With that UI5 takes care of displaying the desired UI5 view based on the given browser hash.

Lets adjust the `manifest.json` to enable the routing feature also for the newly created view.

1. Open `SensorTest/webapp/manifest.json`.
2. Go the section `sap.ui5`.
3. Replace all content inside the `routing` property with following content:

***SensorTest/webapp/manifest.json***

````json
"routing": {
    "config": {
        "routerClass": "sap.m.routing.Router",
        "viewType": "XML",
        "async": true,
        "transition": "slide",
        "viewPath": "keepcool.SensorTest.view",
        "controlAggregation": "pages",
        "controlId": "app"
    },
    "routes": [{
        "name": "RouteSensors",
        "pattern": "",
        "target": ["TargetSensors"]
    }],
    "targets": {
        "TargetSensors": {
            "viewId": "Sensors",
            "viewName": "Sensors"
        }
    }
}
````

4. Now, open the tab with the application preview and perform a reload. The application is being updated and you can see an empty `sap.m.IconTabBar`.
  * [Optional] If you have closed the tab with the application preview accidentally, click in the header toolbar on *View* and then select *Find Command...*. A new popup is opend, enter here *Ports: Preview* and press *Enter*. A new tab is opened with the application preview.</ul>

<br>![](images/02_02_0030.png)

## Summary

You've now enabled your application for routing and prepared your application further development with completing [Exercise 2 - Basic UI5 Configuration and  View Creation](#exercise-2---basic-ui5-configuration-and-view-creation). Stay tuned!

Continue to [Exercise 3 - Show Sensor Content](../ex3/README.md).


## Further Information

* UI5 Demokit: https://ui5.sap.com/
* Views in UI5: https://ui5.sap.com/#/topic/91f27e3e6f4d1014b6dd926db0e91070
* Routing in UI5: https://ui5.sap.com/#/topic/3d18f20bd2294228acb6910d8e8a5fb5
* SAP Fiori 3: https://experience.sap.com/fiori-design-web/sap-fiori/#sap-fiori-3
