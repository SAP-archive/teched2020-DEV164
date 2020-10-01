[![code](https://flat.badgen.net/badge/code/available/green?icon=github)](https://github.com/SAP-samples/teched2020-DEV164/tree/code/ex2/TechEd2020)
[![demo](https://flat.badgen.net/badge/demo/deployed/blue?icon=chrome)](https://sap-samples.github.io/teched2020-dev164/exercises/ex2/TechEd2020/SensorManager/webapp/)

# Exercise 2 - Basic UI5 Configuration and View Creation

In this exercise you'll add some content to your application. A new UI5 view showing multiple sensors will be the first part of your app.

## Exercise 2.1 - Switch to SAP Fiori 3

SAP Fiori 3 is SAP’s new target design system. It evolves the SAP Fiori design for all SAP products to fully support the Intelligent Suite, running on any device. SAP Business Application Studio by default generates UI5 projects based on SAP Fiori 2.0. In your UI5 application the SAP Fiori version is controlled by the UI5 theme. The configuration of the UI5 theme is done in `SensorManager/webapp/index.html`. In case you'd like to stick with SAP Fiori 2.0, continue with [Exercise 2.2 - Create Sensors.view.xml](#exercise-22---create-sensorsviewxml).

1. Open `SensorManager/webapp/index.html`.

2. Replace the `sap_belize` value of the attribute `data-sap-ui-theme` with `sap_fiori_3`.

***SensorManager/webapp/index.html***

````html
<script id="sap-ui-bootstrap"
    src="https://sapui5.hana.ondemand.com/resources/sap-ui-core.js"
    data-sap-ui-theme="sap_fiori_3"
    data-sap-ui-resourceroots='{"keepcool.SensorManager": "./"}'
    data-sap-ui-compatVersion="edge"
    data-sap-ui-oninit="module:sap/ui/core/ComponentSupport"
    data-sap-ui-async="true"
    data-sap-ui-frameOptions="trusted">
</script>
````

## Exercise 2.2 - Create Sensors.view.xml

After completing these steps you'll have written your first UI5 view.

1. Right-click on the `SensorManager/webapp/view` folder and select `New File`.
<br>![](/exercises/ex2/images/02_02_0010.png)

2. Enter `Sensors.view.xml` as file name and confirm.
<br>![](/exercises/ex2/images/02_02_0020.png)

3. Now we'll add some content to your newly created UI5 view. Let's start with an empty `sap.m.IconTabBar`.

***SensorManager/webapp/view/Sensors.view.xml***

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

You will use several UI5 libraries like `sap.m` or `sap.f` in your application. The central point for configuring your UI5 application is the `manifest.json` file, which is located at `SensorManager/webapp/manifest.json`.

1. Open `SensorManager/webapp/manifest.json`.
2. Go to the section `sap.ui5`.
3. Add the `sap.m`, `sap.f` and `sap.suite.ui.microchart` libraries to the `dependencies/libs` section. UI5 will take care of loading all the libraries listed here when your app is started.

***SensorManager/webapp/manifest.json***

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

UI5 comes with a powerful routing API that helps you control the state of your application efficiently. It takes care of displaying the desired UI5 view based on the given browser hash.

Let's adjust the `manifest.json` to enable the routing feature for your newly created view.

1. Open `SensorManager/webapp/manifest.json`.
2. Go to the section `sap.ui5`.
3. Replace all content inside the `routing` property with the following content:

***SensorManager/webapp/manifest.json***

````json
"routing": {
    "config": {
        "routerClass": "sap.m.routing.Router",
        "viewType": "XML",
        "async": true,
        "transition": "slide",
        "viewPath": "keepcool.SensorManager.view",
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

4. Open the tab with the application preview and reload it. The application is being updated, and you can see an empty `sap.m.IconTabBar`.
  * [Optional] If you have closed the tab with the application preview accidentally, click in the header toolbar on *View* and then select *Find Command...*. Enter here *Ports: Preview* and confirm. A new tab with the application preview opens.</ul>

<br>![](images/02_02_0030.png)

## Summary

You've now enabled routing for your application and prepared your application for further development. Stay tuned!

Continue to [Exercise 3 - Show Sensor Content](../ex3/README.md).


## Further Information

* UI5 Demokit: https://ui5.sap.com/
* Views in UI5: https://ui5.sap.com/#/topic/91f27e3e6f4d1014b6dd926db0e91070
* Routing in UI5: https://ui5.sap.com/#/topic/3d18f20bd2294228acb6910d8e8a5fb5
* SAP Fiori 3: https://experience.sap.com/fiori-design-web/sap-fiori/#sap-fiori-3
