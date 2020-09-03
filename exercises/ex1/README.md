# Exercise 1 - Project Setup using SAP Business Application Studio

In this exercise, you will create a new UI5 application based on a provided template of SAP Business Application Studio.

## Scenario
Your customer "Keep Cool Inc." is a maintainer of several icehouses across the country. Recently those have been upgraded with new sensors with internet connection, so that their measuring values are available as a service. To make use of this data and to improve their internal workflows the company asked us to provide an application leveraging this sensor data, visualize it and provide an overview of the current state of each sensor, so that they can react quickly on any issues.

## Exercise 1.1 - Create a new UI5 application

After completing these steps you will have created your first UI5 application.

1. Click on *Create project from template* on the *Welcome* page.
    * [Optional] If you have closed the *Welcome* page accidentally, click in the header toolbar on *View* and then select *Find Command...*. A new popup is opend, enter here *SAP Business Application Studio: Welcome Page*.</ul>
<br>![](images/01_01_0010.png)

2. Choose *SAP Fiori Freestyle - Project Generator* and press *Next*
<br>![](images/01_01_0020.png)

3. Enter following settings in the *Target Running Environment* step: 
    1. Select *Cloud Foundry* as *target running environment*
    2. Select *SAPUI5 Application* as application template and press *Next*.</ol>
<br>![](images/01_01_0030.png)<ol>

4. Enter *TechEd2020* as project name and press *Next*.
<br>![](images/01_01_0040.png)

5. Choose the *Standalone Approuter* as your *HTML 5 Applications Runtime* and press *Next*.
<br>![](images/01_01_0050.png)

6. Enter following settings in the *Basic Attributes* step:
    1. Enter *SensorsTest* as *HTML5 module name* 
    2. Choose *No* as authentication
    3. Enter *keepcool* as your namespace
    4. Choose *Yes* for karma support and press *Next*.</ol>
<br>![](images/01_01_0060.png)<ol>

7. Enter *App* as your view name, choose *No* for data service usage and press *Next*.
<br>![](images/01_01_0070.png)

8. The project is generated and a small notification window appears in the lower right corner. Click on *Open in New Workspace*.
<br>![](images/01_01_0080.png)

9. Now, the newly created UI5 application is displayed in the File Explorer.
<br>![](images/01_01_0090.png)

## Exercie 1.2 - Create a Run Configuration
Now, its time for a first preview of your newly created application.

1. Click on "&#9654;"-icon in the left bar in your SAP Business Application Studio
<br>![](images/01_02_0010.png)

2. Click on the "&plusb;" icon to add a new configuration in *Run Configurations*.
<br>![](images/01_02_0020.png)

3. After a short delay a list should popup at the top in the middle of your screen, here you can select the just created module *SensorsTest*.
<br>![](images/01_02_0030.png)

4. Now, you have to specifiy your desired html site. In your case, use *index.html* as the runnable file.
<br>![](images/01_02_0040.png)

5. Select *latest* as UI5 resources.
<br>![](images/01_02_0050.png)

6. Enter *Run TechEd2020-SensorTest* as name for your new run configuration.
<br>![](images/01_02_0060.png)

7. Now a new configuration *Run TechEd2020-SensorTest* should appear in the left. Click on the green icon *Run Module*.
<br>![](images/01_02_0070.png)

8. The application gets initialized. After a few seconds a few notifications are displayed on the lower right corner. Click on the "Expose and Open" Button.
<br>![](images/01_02_0080.png)

9. After a short delay a popup is opened where you can specific an optional name. You can leave it empty. Press *Enter*.
<br>![](images/01_02_0090.png)

10. The UI5 application is opened in a new tab.
<br>![](images/01_02_0100.png)

## Summary
Hooray! You've successfully accomplished [Exercise 1 - Project Setup using SAP Business Application Studio](#exercise-1-project-setup-using-sap-business-applicationsstudio).

Continue to - [Exercise 2 - Navigation and Libraries in Manifest](../ex2/README.md)

