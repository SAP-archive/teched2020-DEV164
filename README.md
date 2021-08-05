[![REUSE status](https://api.reuse.software/badge/github.com/SAP-samples/teched2020-DEV164/)](https://api.reuse.software/info/github.com/SAP-samples/teched2020-DEV164/)

# Developing Apps with SAPUI5

## Description

This repository contains the material for a beginner workshop about developing applications with SAPUI5 based on the the SAP TechEd 2020 session called **DEV164 – Developing Apps with SAPUI5**.

## Overview

In this session, you will learn about developing web applications with SAPUI5. This is a test. We will use the SAP Business Application Studio as development environment and build a small application to get familiar with our latest developer tools and recommendations.

## Requirements

The requirements to follow the exercises in this repository are:
- Get a free trial account on SAP BTP; see this [tutorial](https://developers.sap.com/tutorials/hcp-create-trial-account.html).
- Enable Cloud Foundry and create an organization e.g. *ui5-cloud-foundry*; see the [help portal](https://help.sap.com/viewer/a96b1df8525f41f79484717368e30626/Cloud/en-US/dc18bac42270468d84b6c030a668e003.html).
- Set Up SAP Business Application Studio for development; see this [tutorial](https://developers.sap.com/tutorials/appstudio-onboarding.html).
- Be excited about the power of SAP technologies to make your developer life easier.


## Exercises
- [Introduction](DEV164.pdf)
- [Getting Started](exercises/ex0/)
- [Exercise 1 - Project Setup Using Business Application Studio](exercises/ex1/)
    - [Exercise 1.1 - Create a New UI5 Application](exercises/ex1#exercise-11---create-a-new-ui5-application)
    - [Exercise 1.2 - Try out the generated Application](exercises/ex1#exercise-12---try-out-the-generated-application)
- [Exercise 2 - Basic UI5 Configuration and  View Creation](exercises/ex2/)
    - [Exercise 2.1 - Switch to SAP Fiori 3](exercises/ex2#exercise-21---switch-to-sap-fiori-3)
    - [Exercise 2.2 - Create Sensors.view.xml](exercises/ex2#exercise-22---create-sensorsviewxml)
    - [Exercise 2.3 - Add Dependencies](exercises/ex2#exercise-23---add-dependencies)
    - [Exercise 2.4 - Enable Routing for Sensors.view.xml](exercises/ex2#exercise-24---enable-routing-for-sensorsviewxml)
- [Exercise 3 - Show Sensor Content](exercises/ex3/)
    - [Exercise 3.1 - Import Sensor Data](exercises/ex3#exercise-31---import-sensor-data)
    - [Exercise 3.2 - Configure a Data Service](exercises/ex3#exercise-32---configure-a-data-service)
    - [Exercise 3.3 - Add a GridList](exercises/ex3#exercise-33---add-a-gridlist)
    - [Exercise 3.4 - Add Data Binding](exercises/ex3#exercise-34---add-data-binding)
- [Exercise 4 - Introduce Localization](exercises/ex4/)
    - [Exercise 4.1 - Replacing Hard Coded Text with i18n Variables](exercises/ex4#exercise-41---replacing-hard-coded-text-with-i18n-variables)
    - [Exercise 4.2 - Add Additional Languages](exercises/ex4#exercise-42---add-additional-languages)
    - [Exercise 4.3 - Configure Supported Languages](exercises/ex4#exercise-43---configure-supported-languages)
- [Exercise 5 - Improve Visualization](exercises/ex5/)
    - [Exercise 5.1 - Enhance Sensors.view.xml](exercises/ex5#exercise-51---enhance-sensorsviewxml)
    - [Exercise 5.2 - Create Sensors.controller.js](exercises/ex5#exercise-52---create-sensorscontrollerjs)
    - [Exercise 5.3 - Assign Controller to View](exercises/ex5#exercise-53---assign-controller-to-view)
    - [Exercise 5.4 - Create your first Formatter](exercises/ex5#exercise-54---create-your-first-formatter)
    - [Exercise 5.5 - Add the Formatter in your View](exercises/ex5#exercise-55---add-the-formatter-in-your-view)
- [Exercise 6 - Filtering With the IconTabBar](exercises/ex6/)
    - [Exercise 6.1 - Add new IconTabFilters to the Sensors.view.xml](exercises/ex6#exercise-61---add-new-icontabfilters-to-the-sensorsviewxml)
    - [Exercise 6.2 - Implement the Filtering](exercises/ex6#exercise-62---implement-the-filtering)
    - [Exercise 6.3 - Assign the Filtering to the IconTabBar](exercises/ex6#exercise-63---assign-the-filtering-to-the-icontabbar)
    - [Exercise 6.4 - Display the Total Number of Sensors in Every IconTabFilter](exercises/ex6#exercise-64---display-the-total-number-of-sensors-in-every-icontabfilter)
- [Exercise 7 - Fragment Containing a SelectDialog](exercises/ex7/)
    - [Exercise 7.1 - Create a new Fragment Definition](exercises/ex7#exercise-71---create-a-new-fragment-definition)
    - [Exercise 7.2 - Implement the Dialog Opening Logic](exercises/ex7#exercise-72---implement-the-dialog-opening-logic)
    - [Exercise 7.3 - Add a Dialog Opening Button](exercises/ex7#exercise-73---add-a-dialog-opening-button)
    - [Exercise 7.4 - Implement the 'Filter Customer' Logic](exercises/ex7#exercise-74---implement-the-filter-customer-logic)
    - [Exercise 7.5 - Implement the 'Select Customer' Logic](exercises/ex7#exercise-75---implement-the-select-customer-logic)
    - [Exercise 7.6 - Assign the 'Customer Change' and 'Customer Select' Logic to the Dialog](exercises/ex7#exercise-76---assign-the-customer-change-and-select-logic-to-the-dialog)
- [Exercise 8 - Second View with Navigation](exercises/ex8/)
    - [Exercise 8.1 - Create SensorStatus.view.xml](exercises/ex8#exercise-81---create-sensorstatusviewxml)
    - [Exercise 8.2 - Configure the 'manifest.json' file](exercises/ex8#exercise-82---configure-the-manifestjson-file)
    - [Exercise 8.3 - Implement the Navigation to the New View](exercises/ex8#exercise-83---implement-the-navigation-to-the-new-view)
    - [Exercise 8.4 - Assign the Navigation Logic to the Sensor Items](exercises/ex8#exercise-84---assign-the-navigation-logic-to-the-sensor-items)
    - [Exercise 8.5 - Create SensorStatus.controller.js](exercises/ex8#exercise-85---create-sensorstatuscontrollerjs)
    - [Exercise 8.6 - Implement the Back-Navigation to Sensors.view.xml](exercises/ex8#exercise-86---implement-the-back-navigation-to-sensorsviewxml)
- [Exercise 9 - Card with NumericHeader](exercises/ex9/)
    - [Exercise 9.1 - Add a Card to SensorStatus.view.xml](exercises/ex9#exercise-91---add-a-card-to-sensorstatusviewxml)
    - [Exercise 9.2 - Enhance SensorStatus.controller.js](exercises/ex9#exercise-92---enhance-sensorstatuscontrollerjs)
    - [Exercise 9.3 - Add a NumericHeader to the Card](exercises/ex9#exercise-93---add-a-numericheader-to-the-card)
- [Exercise 10 - Chart with DataBinding](exercises/ex10/)
    - [Exercise 10.1 - Create the Chart](exercises/ex10#exercise-101---create-the-chart)
    - [Exercise 10.2 - Master the Chart](exercises/ex10#exercise-102---master-the-chart)
- [Exercise 11 - Deployment to SAP BTP, Cloud Foundry runtime](exercises/ex11/)
    - [Exercise 11.1 - Create Space in Cloud Foundry](exercises/ex11#exercise-111---create-space-in-cloud-foundry)
    - [Exercise 11.2 - Login to Cloud Foundry](exercises/ex11#exercise-112---login-to-cloud-foundry)
    - [Exercise 11.3 - Set Organization and Space](exercises/ex11#exercise-113---set-organization-and-space)
    - [Exercise 11.4 - Configure App Router for Redirect](exercises/ex11#exercise-114---configure-the-app-router-for-redirect)
    - [Exercise 11.5 - Configure Your UI5 Application](exercises/ex11#exercise-115---configure-your-ui5-application)
    - [Exercise 11.6 - Build Your Application](exercises/ex11#exercise-116---build-your-application)
    - [Exercise 11.7 - Deploy Your Application](exercises/ex11#exercise-117---deploy-your-application)

## Download and Installation
Follow these [steps](https://github.com/SAP-samples/teched2020-DEV164/tree/code) to get the code or do the exercises step by step.

## Known Issues
No known issues.

## Contributing
The content of this repository is targeting the session *DEV164 - Developing Apps with SAPUI5* at SAP TechEd 2020. Only sesson speakers will make contributions to this repository. If you wanna enhance the content of this repository feel free to fork it.

## How to obtain support
Support for the content in this repository is available during the actual time of the online session for which this content has been designed. Otherwise, you may request support via the [Issues](../../issues) tab.

## Stay in touch
Stay in touch with the community by choosing your favourite channel.

**UI5**:
* Landing page: [OpenUI5 Website](https://openui5.org/)
* Podcasts series: [UI5 Newscast](https://podcast.opensap.info/ui5-newscast/)
* Blog posts: [UI5ers Buzz](https://blogs.sap.com/tag/ui5ers-buzz/)
* Twitter: [@openui5](https://twitter.com/openui5)
* Slack: [Get Access to OpenUI5 Slack Workspace](https://ui5-slack-invite.cfapps.eu10.hana.ondemand.com/)

**SAP Open Source**:
* Landing page: [Run better together with open source](https://developers.sap.com/open-source.html)
* Podcasts series: *[The Open Source Way](https://podcast.opensap.info/open-source-way/2020/10/28/corona-warn-app-behind-the-scenes/)*
* Blog posts: [open source on SAP Community](https://blogs.sap.com/tags/b2aac474-1581-4b1b-8932-de5f60b52558/)
* Twitter: [@sapopensource](https://twitter.com/sapopensource)

## License

Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved. This file is licensed under the Apache Software License, version 2.0 except as noted otherwise in the [LICENSE](/LICENSES/Apache-2.0.txt) file.
