[![solution](https://flat.badgen.net/badge/solution/available/green?icon=github)](../../../../tree/gh-pages/ex11)

# Exercise 11 - Deploy Your App to SAP BTP, Cloud Foundry runtime

In this exercise you'll learn how easy it is to deploy your application directly from SAP Business Application Studio to the SAP BTP, Cloud Foundry runtime.

## Exercise 11.1 - Create Space in Cloud Foundry

First of all, you need to create the space in your Cloud Foundry environment to host your newly created UI5 application.

1. Open the SAP BTP Trial by opening *https://cockpit.hanatrial.ondemand.com/cockpit/#/home/trial* in a new browser tab and click *Go To Your Trial Account*.
<br><br>![](images/11_01_0010.png)<br><br>

2. You're redirected to your personal SAP BTP Cockpit where your subaccounts are listed. Click on the prefered subaccount, e.g. *trial*.
<br><br>![](images/11_01_0020.png)<br><br>

3. Click the menu item *Cloud Foundry* and then *Spaces*. Until now, no space was created by you. Click *Create Space*.
<br><br>![](images/11_01_0030.png)<br><br>

4. In the popup, enter the space name, e.g. *ui5-apps*. Click *Create*.
<br><br>![](images/11_01_0040.png)<br><br>

5. The newly created space is displayed.
<br><br>![](images/11_01_0050.png)<br><br>


## Exercise 11.2 - Login to Cloud Foundry

Now you can login to your Cloud Foundry environment directly from SAP Business Application Studio.

1. Open SAP Business Application Studio. Click in the header toolbar on *View* and then select *Find Command...*. Enter *CF: Login to cloud foundry*.
<br><br>![](images/11_02_0010.png)<br><br>

2. Enter the Cloud Foundry API endpoint you'd like to use. If your environment runs in the EU10 region, this is `https://api.cf.eu10.hana.ondemand.com`. If you wanna host your application in another region, please check [this site](https://help.sap.com/viewer/65de2977205c403bbc107264b8eccf4b/Cloud/en-US/350356d1dc314d3199dca15bd2ab9b0e.html) to get an overview about all available regions and respective API endpoints.
<br><br>![](images/11_02_0020.png)<br><br>

3. Enter the email address you have used for registering your SAP BTP account.
<br><br>![](images/11_02_0030.png)<br><br>

4. Enter the password for your SAP BTP account. Remember that you have to enter your password followed by your 2FA code in case you have set up 2-Factor-Authentication!
<br><br>![](images/11_02_0040.png)<br><br>

5. After a few seconds a small window appears in the lower right corner notifying you that the login was successful.
<br><br>![](images/11_02_0050.png)<br><br>


## Exercise 11.3 - Set Organization and Space

After logging in you're asked to specify your desired Cloud Foundry organization and space.

1. If you are not asked right away to select the organization, then click in the header toolbar on *View* and then select *Find Command...*. Enter *CF: Set Org and Space*.
<br><br>![](images/11_03_0010.png)<br><br>

2. Enter your Cloud Foundry organization name e.g. *ui5-cloud-foundry* - or select the ID of your trial account (the first part of the Business Application Studio URL)
<br><br>![](images/11_03_0020.png)<br><br>

3. Select your newly created space, e.g. *ui5-apps*.
<br><br>![](images/11_03_0030.png)<br><br>

4. After a few seconds a small window appears in the lower right corner notifying you that your organization and space have been set successfully.
<br><br>![](images/11_03_0040.png)<br><br>


## Exercise 11.4 - Configure Your UI5 Application

Since you created your app using one of the application templates available in SAP Business Application Studio, all files which are located under `sensormanager/test/` and `sensormanager/localService/` are excluded from any build, because in a productive application these files are usually not needed. In our case the sensor data is placed in a local JSON file, so the `sensors.json` file needs to be included in the build. 

1. Open `sensormanager/ui5-deploy.yaml`. 

2. Remove the `"/localService/**"` entry for the `builder` section.

***sensormanager/ui5.yaml***

````yaml
builder:
  resources:
    excludes:
      - "/test/**"
````

## Exercise 11.6 - Build Your Application

Now it's time to build your application. Yeah!

1. Right-click the `mta.yaml` file in the root folder.

2. Select *Build MTA Project*. The build starts.
<br><br>![](images/11_06_0010.png)<br><br>

3. Once the build has finished the terminal will display messages that the MTA archive has been generated and temporary files are cleaned up:
<br><br>![](images/11_06_0020.png)<br><br>


## Exercise 11.7 - Deploy Your Application

The build step has created a file named `TechEd2020_0.0.1.mtar` located under `mta_archives`. This file contains your build.

1. Right-click `mta_archives/TechEd2020_0.0.1.mtar` and select *Deploy MTA Archive*. Deployment starts.
<br><br>![](images/11_07_0010.png)<br><br>

2. Deployment should have finished after a few minutes, of which you'll be notified by in the terminal.
<br><br>![](images/11_07_0020.png)<br><br>

3. The deployed application can be started from the SAP BTP Cockpit. Go to your trial subaccount and click on the *HTML5 Applications* section at tjhe left hand side. The application is listed there as 'keepcoolsensormanager'. Click on it to start it.
<br><br>![](images/11_07_0030.png)<br><br>

4. Congratulations! You've deployed your UI5 application to the SAP BTP, Cloud Foundry runtime.
<br><br>![](images/11_07_0040.png)<br><br>

## Summary

Hooray! You've completed successfully [Exercise 11 - Deployment to SAP BTP, Cloud Foundry runtime](../ex11/README.md). But this is not the end yet:

Continue to [Exercise 12 - Develop your own Control](../ex12/README.md).
