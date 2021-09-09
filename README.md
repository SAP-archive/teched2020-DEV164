# Developing Apps With SAPUI5
On this site you can find an overview about the available exercises, the respective solutions and live demos.

## The Workshop
Just start with the first exercise [Getting Started](https://github.com/SAP-samples/teched2020-DEV164/tree/master/exercises/ex0/README.md) and then follow the link to the next excercise at the end of each chapter.

## Working With The Code

These are the steps to get the working code for any of the exercises, in case you missed an exercise or could not resolve an error you encountered.

NOTE: steps 1-6 are only required once. After they have been done, you can simply do steps 7 and 8 to open the code of a different exercise.

1. Go to SAP Business Application Studio
2. Open a new Terminal (in the top menu bar, click on *Terminal* and select *New Terminal*)
3. Go to folder `projects` (in the newly opened Terminal area at the bottom, enter `cd /home/user/projects` and hit the `Enter` key)
4. Then, similarly, execute `git clone https://github.com/SAP-samples/teched2020-DEV164.git` in the Terminal
5. Then, execute `cd Developing-Apps-with-SAPUI5`
6. Execute `git checkout code`
7. In the top menu bar, click on *File* > *Open Workspace...*
8. Select the `sensormanager` folder inside your desired exercise, e.g. `/projects/Developing-Apps-with-SAPUI5/ex5/sensormanager` for exercise 5 and click `Open`

Once BAS has finished opening the workspace, the code implementing the selected exercise is available in the Project Explorer.

To run the code:
1. Open a new Terminal again (*Terminal* > *New Terminal*)
2. In the Terminal, execute `npm install`. This may take a while.
3. Once finished, either:
    - press the "play"-style triangle in the left-hand icon bar to open the Run Configurations and click the green triangle that appears when hovering `Start sensormanager` or:
    - press the "debug" icon in the left-hand icon bar and press the green "Start Debugging" triangle

NOTE: you can execute roughly the same steps in your local development environment when you have VSCode installed. UI5 and this app do not require the usage of the Business Application Studio.


## Working With The Demo
This is an easy job. Just click on the demo link of the desired exercise below.

## Code And Demo

| Exercise | | | |
| :--- | --- | --- | --- |
| Getting Started | [exercise](https://github.com/SAP-samples/teched2020-DEV164/tree/master/exercises/ex0/README.md) | | |
| Exercise 1 - Project Setup using Business Application Studio | [exercise](https://github.com/SAP-samples/teched2020-DEV164/tree/master/exercises/ex1/README.md) | [solution](https://github.com/SAP-samples/teched2020-DEV164/tree/code/ex1/) | [demo](https://dirkelko.github.io/Developing-Apps-with-SAPUI5/ex1/sensormanager/webapp/index.html) |
| Exercise 2 - Basic UI5 Configuration and View Creation | [exercise](https://github.com/SAP-samples/teched2020-DEV164/tree/master/exercises/ex2/README.md) | [solution](https://github.com/SAP-samples/teched2020-DEV164/tree/code/ex2/) | [demo](https://dirkelko.github.io/Developing-Apps-with-SAPUI5/ex2/sensormanager/webapp/index.html) |
| Exercise 3 - Show Sensor Content | [exercise](https://github.com/SAP-samples/teched2020-DEV164/tree/master/exercises/ex3/README.md) | [solution](https://github.com/SAP-samples/teched2020-DEV164/tree/code/ex3/) | [demo](https://dirkelko.github.io/Developing-Apps-with-SAPUI5/ex3/sensormanager/webapp/index.html) |
| Exercise 4 - Introduce Localization | [exercise](https://github.com/SAP-samples/teched2020-DEV164/tree/master/exercises/ex4/README.md) | [solution](https://github.com/SAP-samples/teched2020-DEV164/tree/code/ex4/) | [demo](https://dirkelko.github.io/Developing-Apps-with-SAPUI5/ex4/sensormanager/webapp/index.html) |
| Exercise 5 - Improve Visualization | [exercise](https://github.com/SAP-samples/teched2020-DEV164/tree/master/exercises/ex5/README.md) | [solution](https://github.com/SAP-samples/teched2020-DEV164/tree/code/ex5/) | [demo](https://dirkelko.github.io/Developing-Apps-with-SAPUI5/ex5/sensormanager/webapp/index.html) |
| Exercise 6 - Filtering with the IconTabBar | [exercise](https://github.com/SAP-samples/teched2020-DEV164/tree/master/exercises/ex6/README.md) | [solution](https://github.com/SAP-samples/teched2020-DEV164/tree/code/ex6/) | [demo](https://dirkelko.github.io/Developing-Apps-with-SAPUI5/ex6/sensormanager/webapp/index.html) |
| Exercise 7 - Fragment containing a SelectDialog | [exercise](https://github.com/SAP-samples/teched2020-DEV164/tree/master/exercises/ex7/README.md) | [solution](https://github.com/SAP-samples/teched2020-DEV164/tree/code/ex7/) | [demo](https://dirkelko.github.io/Developing-Apps-with-SAPUI5/ex7/sensormanager/webapp/index.html) |
| Exercise 8 - Second View with Navigation | [exercise](https://github.com/SAP-samples/teched2020-DEV164/tree/master/exercises/ex8/README.md) | [solution](https://github.com/SAP-samples/teched2020-DEV164/tree/code/ex8/) | [demo](https://dirkelko.github.io/Developing-Apps-with-SAPUI5/ex8/sensormanager/webapp/index.html) |
| Exercise 9 - Card with NumericHeader | [exercise](https://github.com/SAP-samples/teched2020-DEV164/tree/master/exercises/ex9/README.md) | [solution](https://github.com/SAP-samples/teched2020-DEV164/tree/code/ex9/) | [demo](https://dirkelko.github.io/Developing-Apps-with-SAPUI5/ex9/sensormanager/webapp/index.html) |
| Exercise 10 - Chart with DataBinding | [exercise](https://github.com/SAP-samples/teched2020-DEV164/tree/master/exercises/ex10/README.md) | [solution](https://github.com/SAP-samples/teched2020-DEV164/tree/code/ex10/) | [demo](https://dirkelko.github.io/Developing-Apps-with-SAPUI5/ex10/sensormanager/webapp/index.html) |
| Exercise 11 - Deployment to SAP BTP, Cloud Foundry runtime | [exercise](https://github.com/SAP-samples/teched2020-DEV164/tree/master/exercises/ex11/README.md) | [solution](https://github.com/SAP-samples/teched2020-DEV164/tree/code/ex11/TechEd2020) | |
| Exercise 12 - Develop your own Control | [exercise](https://github.com/SAP-samples/teched2020-DEV164/tree/master/exercises/ex12/README.md) | [solution](https://github.com/SAP-samples/teched2020-DEV164/tree/code/ex12/) | [demo](https://dirkelko.github.io/Developing-Apps-with-SAPUI5/ex12/sensormanager/webapp/index.html) |
