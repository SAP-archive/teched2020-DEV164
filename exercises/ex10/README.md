# Exercise 10 - Chart with DataBinding

In this exercise you'll put some analytical flavour to your UI5 application by using a chart.

## Exercise 10.1 - Create the Chart

To be able to show some historical data you can leverage the `temperatureLog` of the sensor data. You'll use an `sap.suite.ui.microchart.InteractiveLineChart`to add the datapoints.

1. Open `SensorTest/webapp/view/SensorStatus.view.xml`. 

2. Add the `sap.suite.ui.microchart` library to the `SensorStatus.view.xml`.

***SensorStatus/webapp/view/SensorStatus.view.xml***

````xml
<mvc:View displayBlock="true" 
    controllerName="keepcool.SensorTest.controller.SensorStatus"
    xmlns:mvc="sap.ui.core.mvc"
    xmlns="sap.m"
    xmlns:f="sap.f"
    xmlns:card="sap.f.cards"
    xmlns:mc="sap.suite.ui.microchart">
````
3. Add the chart to the `SensorStatus.view.xml` and bind the `temperatureLog` to the points aggregation. For each point we display the `temperature` property.

***SensorStatus/webapp/view/SensorStatus.view.xml***

````xml
<f:content>
    <FlexBox width="100%" height="15rem"
    alignItems="Center" class="sapUiSmallMargin">
        <mc:InteractiveLineChart points="{sensorModel>temperatureLog}" displayedPoints="20" selectionEnabled="false">
            <mc:InteractiveLineChartPoint value="{sensorModel>temperature}"/>
        </mc:InteractiveLineChart>
    </FlexBox>
</f:content>
````

4. Switch the browser tab where the application preview is opened. Click on a sensor. Now, the sensor status page contains a chart with a temperature history.
<br>![](images/10_01_0010.png)

## Exercise 10.2 - Master the Chart

After completing the previous exercises you are quite experienced in pimping your UI5 application, master your chart to show what you've learned.

1. Open `SensorTest/webapp/view/SensorStatus.view.xml`.

2. Add a formatting for every datapoint to improve the readability. You can use an expression binding to achieve this leveraging default JavaScript functionality.

***SensorStatus/webapp/view/SensorStatus.view.xml***

````xml
<mc:InteractiveLineChartPoint
    value="{=Number.parseFloat(${sensorModel>temperature}.toFixed(2))}"
/>
````

3. Switch the browser tab where the application preview is opened. Click on a sensor. Now, the sensor status page contains a chart with a temperature history with better readability.
<br>![](images/10_02_0010.png)

4. Add some semantic color for the data points with your formatter function.

***SensorStatus/webapp/view/SensorStatus.view.xml***

````xml
<mc:InteractiveLineChartPoint
    value="{=Number.parseFloat(${sensorModel>temperature}.toFixed(2))}"
    color="{parts: ['sensorModel>/threshold', 'sensorModel>temperature'], formatter:'.formatValueColor'}"
/>
````

5. Switch the browser tab where the application preview is opened. Click on a sensor. Now, the sensor status page contains a chart with a temperature history with colored data points.
<br>![](images/10_02_0020.png)

6. Add labels for the data points to provide some contextual info to the user.

***SensorStatus/webapp/view/SensorStatus.view.xml***

````xml
<mc:InteractiveLineChartPoint
    value="{=Number.parseFloat(${sensorModel>temperature}.toFixed(2))}"
    color="{parts: ['sensorModel>/threshold', 'sensorModel>temperature'], formatter:'.formatValueColor'}"
    label="{sensorModel>time}"
/>
````

7. Switch the browser tab where the application preview is opened. Click on a sensor. Now, the sensor status page contains a chart with a temperature history with x-axis labels. 
<br>![](images/10_02_0030.png)

8. Displaying the date as a number value makes not much sense. To improve the readability you can format the label using a `UI5 DataType`. These types are predefined and can be configured individually regarding the input and output format.

***SensorStatus/webapp/view/SensorStatus.view.xml***

````xml
<mc:InteractiveLineChartPoint
    value="{=Number.parseFloat(${sensorModel>temperature}.toFixed(2))}"
    color="{parts: ['sensorModel>/threshold', 'sensorModel>temperature'], formatter:'.formatValueColor'}"
    label="{
        path: 'sensorModel>time',
        type: 'sap.ui.model.type.Time',
        formatOptions: {
            source: { pattern: 'timestamp' },
                style: 'short'
            }
        }"
/>
````

9. Switch the browser tab where the application preview is opened. Click on a sensor. Now, the sensor status page contains a chart with a temperature history with readable x-axis labels. 
<br>![](images/10_02_0040.png)

## Summary

Yay! You've completed successfully [Exercise 10 - Chart with DataBinding](#exercise-10---chart-with-databinding).

Celebrate yourself! You have reached your first level in being an UI5 experts.


## Further Information

* UI5 Microcharts: https://ui5.sap.com/#/topic/9cbe3f06465e47b8a136956034a718ed
* sap.suite.ui.microchart.InteractiveLineChart: https://ui5.sap.com/#/api/sap.suite.ui.microchart.InteractiveLineChart
* Formatting, Parsing, and Validating Data: https://ui5.sap.com/#/topic/07e4b920f5734fd78fdaa236f26236d8
* sap.ui.model.type.Time: https://ui5.sap.com/#/topic/91f322a06f4d1014b6dd926db0e91070