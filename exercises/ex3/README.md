# Exercise 3 - Show Sensor Content
In this exercise, you will add a local data service to the application and display the data on the enhanced UI5 view.

## Exercise 3.1 - Import Sensor Data
To simulate a sensor data providing source, you have to add sensor data to the application.

1. Go to folder `SensorTest/webapp/localService`.

2. Perform a right click on the `localService`-folder.

3. In the opened popup, click on `New File`.
<br>![](images/03_01_0010.png)

4. Enter `sensors.json` as file name.
<br>![](images/03_01_0020.png)

5. Copy and paste the content of the [sensors.json](data/sensors.json) into the newly created file.

## Exercise 3.2 - Configure Data Service
After adding the sensor data to your application, you have to configure the data service which provides the sensor data.

1. Open the `manifest.json` located under `SensorTest/webapp`.

2. Go to section `sap.app`. Here you have to add a new data source with name `sensorSource` which points to the sensor data.

````json
"sap.app": {
    "dataSources": {
        "sensorSource": {
            "type": "JSON",
            "uri": "./localService/sensors.json"
        }
    }
}
````

3. Go to section `sap.ui5`. Here you have to add a new JSONModel with name `sensorModel` which points to the newly created data source.

````json
"sap.ui5": {
    "models": {
        "sensorModel": {
            "type": "sap.ui.model.json.JSONModel",
            "dataSource": "sensorSource"
        }
    }
}
````

## Exercise 3.3 - Add a GridList

## Exercise 3.4 - Add Data Binding

## Summary

Now that you have ... 
Continue to - [Exercise 4 - Description](../ex1/README.md)
