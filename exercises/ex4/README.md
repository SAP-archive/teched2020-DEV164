[![solution](https://flat.badgen.net/badge/solution/available/green?icon=github)](https://github.com/SAP-samples/teched2020-DEV164/tree/code/ex4/TechEd2020)
[![demo](https://flat.badgen.net/badge/demo/deployed/blue?icon=chrome)](https://sap-samples.github.io/teched2020-dev164/exercises/ex4/TechEd2020/SensorManager/webapp/)

# Exercise 4 - Introduce Localization

In this exercise you'll learn how easy it is to enable  localization for your UI5 application.

## Exercise 4.1 - Replacing Hard-Coded Text With i18n Variables

In your existing UI5 application you've used hard-coded text values. That's OK if you'd like to implement a fast proof of concept. In your productive application no hard-coded text should be used, however, because it would be displayed regardless of the actual browser language the user has configured. Your goal is to build an enterprise-ready application which includes localization features, such as text translation. UI5 comes with a huge set of localization features out of the box, which are enabled by default. To benefit from these features, you need to replace all occurrences of hard-coded text in your UI5 application. Luckily, there's only one occurrence 😃 However, it's good practice to start directly with localization in mind instead of refactoring many places in your application afterwards.

1. Open the `Sensors.view.xml` located under `SensorManager/webapp/view/`.

2. Replace the `noDataText` value with the i18n key `noSensorDataText`.

````xml
<f:GridList id="sensorsList"
    items="{path: 'sensorModel>/sensors', sorter: {path:'customer', group:true, descending: false}}"
    noDataText="{i18n>noSensorDataText}">
````

3. Add the newly introduced i18n key also to your `i18n.properties` file, which is located under `SensorManager/webapp/i18n/`, and by the way, let's also pick a better title.

***SensorManager/webapp/i18n/i18n.properties***

````ini
title=Keep Cool Inc. Sensor Manager
appTitle=Sensor Manager
appDescription=The sensor manager
noSensorDataText=No Sensor Data
distanceLabel=Distance
distanceUnit=km
msgSensorDataLoaded=All sensors online!
msgFilterAll=All
msgFilterCold=Cold
msgFilterWarm=Warm
msgFilterHot=Too Hot
toolTipSelectCustomer=Select Customer
titleSelectCustomer=Select Customers
titleSensorStatus=Sensor Status
cardTitle=Customer: {0}
locationLabel=Location
cardSubTitle={0}: {1}, {2}: {3}{4}
temperatureUnit=°C
````

4. Switch browser tabs and refresh the page to see the changed user interface of your UI5 application.
<br><br>![](images/04_01_0010.png)<br><br>

## Exercise 4.2 - Add Additional Languages

Your UI5 application is prepared for localization. No matter which browser language is configured, your UI5 application currently displays the texts of the `i18n.properties` file.
Let's provide new language files for English and German.

1. Go to folder `SensorManager/webapp/i18n/` and right-click.

2. In the popup, click `New File`.

3. Enter `i18n_en.properties` as file name.

4. Repeat Steps 1 and 2.

5. Enter `i18n_de.properties` as file name.

6. Open `i18n_en.properties` and paste the following content:

***SensorManager/webapp/i18n/i18n_en.properties***

````ini
title=Keep Cool Inc. Sensor Manager
appTitle=Sensor Manager
appDescription=The sensor
noSensorDataText=No Sensor Data
distanceLabel=Distance
distanceUnit=km
msgSensorDataLoaded=All sensors online!
msgFilterAll=All
msgFilterCold=Cold
msgFilterWarm=Warm
msgFilterHot=Too Hot
toolTipSelectCustomer=Select Customer
titleSelectCustomer=Select Customers
titleSensorStatus=Sensor Status
cardTitle=Customer: {0}
locationLabel=Location
cardSubTitle={0}: {1}, {2}: {3}{4}
temperatureUnit=°C
````

7. Open `i18n_de.properties` and paste the following content:

***SensorManager/webapp/i18n/i18n_de.properties***

````ini
title=Keep Cool Inc. Sensor Verwalter
appTitle=Sensor Verwalter
appDescription=Der Sensor Verwalter
noSensorDataText=Keine Sensordaten
distanceLabel=Distanz
distanceUnit=km
msgSensorDataLoaded=Alle Sensoren aktiv!
msgFilterAll=Alle
msgFilterCold=Kalt
msgFilterWarm=Warm
msgFilterHot=Zu Heiß
toolTipSelectCustomer=Wähle den Kunden
titleSelectCustomer=Wähle die Kunden
titleSensorStatus=Sensor Status
cardTitle=Kunde: {0}
locationLabel=Ort
cardSubTitle={0}: {1}, {2}: {3}{4}
temperatureUnit=°C
````

8. Depending on the browser language you've configured, you'd now be able to see different text on your user interface.
    * If your browser language is English, the content of `i18n_en.properties` is used.
    * If your browser language is German, the content of `i18n_de.properties` is used.
    * For any other language, the content of `i18n.properties` is used.

## Exercise 4.3 - Configure Supported Languages

Usually, only the `i18n.properties` file is maintained by developers. The language-dependent files will be filled by native speakers or translators. As an application developer, you can configure which languages are supported by your application, and which language is your default (aka fallback) language. In this session English will be the default language, and additionally German should be supported.

1. Open the `manifest.json` located under `SensorManager/webapp`.

2. Go to section `sap.ui5` / `models` / `i18n`. Here, add two new configurations inside your settings object.
      1. Add the property `supportedLocales` and assign the locales for German and English `["de", "en"]`
      2. Add the property `fallbackLocale` and assign the English locale `"en"`

***SensorManager/webapp/manifest.json***

````json
"i18n": {
  "type": "sap.ui.model.resource.ResourceModel",
  "settings": {
      "bundleName": "keepcool.SensorManager.i18n.i18n",
      "supportedLocales": ["de", "en"],
      "fallbackLocale": "en"
  }
}
````

3. Let's see if your UI5 application is able to start in English and German! Switch to the browser tab with an opened application preview and reload the page. The UI5 application should start in English or in German, depending on your browser language.
<br><br>![](images/04_03_0010.png)<br><br> 

4. UI5 provides a URL parameter to simulate another browser language. Add `?sap-ui-language=de` to the URL shown in your browser. UI5 should now start in German regardless of the language you have configured as your browser language.
<br><br>![](images/04_03_0020.png)<br><br> 

5. You can simulate any other language, e.g. English. Add `?sap-ui-language=en` to the URL shown in your browser. UI5 should now start in English regardless of the language you have configured as your browser language.
<br><br>![](images/04_03_0010.png)<br><br>

5. Let's try to start the application in another language, e.g Hindi. Add `?sap-ui-language=hi` to the URL shown in your browser. UI5 should now start in English, because you have configured English as your fallback locale. 
<br><br>![](images/04_03_0010.png)<br><br> 

If you'd like to support Hindi, or any other language of your choice, feel free to repeat the steps described in [Exercise 4.2 Add New Languages](#exercise-42---add-new-languages) with your desired language.

## Summary

Yay! You've accomplished successfully [Exercise 4 - Introduce Localization](#exercise-4---introduce-localization). 

Continue to [Exercise 5 - Improve Visualization](../ex5/README.md).

## Further Information

* Localization: https://ui5.sap.com/#/topic/91f217c46f4d1014b6dd926db0e91070
* Supported Locales and Fallback: https://ui5.sap.com/#/topic/ec753bc539d748f689e3ac814e129563
