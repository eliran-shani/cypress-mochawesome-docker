# cypress-mochawesome-docker - UI Automation Framework

This repository is all about creating, running and verifying automated UI tests <br>
using a cutting edge automation tool. 

### Tech

This repo uses the following open source project:

* Cypress.io - A complete end-to-end testing experience!

    [![Cypress.io](./images/cypressLogo.png)](http://cypress.io/)
    
### PreRequisites

Before diving into this repo, make sure you have the necessary knowledge on the following:

1. [javaScript fundamentals](https://javascript.info/first-steps)
2. [Visual Studio Code](https://code.visualstudio.com/) / [PyCharm](https://www.jetbrains.com/pycharm/) (or any other code editor as you feel comfortable with)
3. [Github Basics](https://product.hubspot.com/blog/git-and-github-tutorial-for-beginners)
4. [Github token setup](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line) (token / ssh integrated in your local machine)
5. [Cypress.io documentation](https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell)
6. [NodeJS](https://nodejs.org/en/download/)

### Installation

Follow these steps to install this repo on your environment:

1. **Git Clone** this repository into your machine
2. Open Terminal
3. If you choose to run your tests locally, <br>
   navigate to the root directory and install the required packages as follows:

    ```sh 
    $ yarn install
    ```

#### Important: Preparation of environment variables

1. **Add the following file** into the root directory: **cypress.env.json** 
    (make sure it is under .gitignore)

    ```$xslt
    {
      "baseUrl": "https://whatever.com",
      "username": "USERNAME",
      "password": "PASSWORD"
    }
    ```
    [USERNAME] = The relevant username <br>
    [PASSWORD] = The relevant password <br>

### Run tests using one of the following options:
1. Docker
2. CLI (Commandline)
3. Test Runner (UI) 
   
#### 1. Running tests via docker

* To run all tests
    ```sh
   $ sh scripts/docker/run_all_tests.bash
    ``` 

* To run a **specific test**
    ```sh
   $ sh scripts/docker/run_test.bash cypress/integration/examples/navigation.spec.js
    ```
       
#### 2. Running tests via CLI

* To run all tests
    ```sh
    $ yarn run test
    ```

* To run all tests (using bash script)
    ```sh
    $ sh script/cli/run_all_tests.bash
    ```

* To run a **specific test**
    ```sh
    $ yarn run test --spec "cypress/integration/sanity_production.spec.js"
    ```

* To run a **specific test** in a **specific browser**
    ```sh
    $ yarn run test --spec "cypress/integration/sanity_production.spec.js" --browser "chrome"
    ```
   
#### 3. Running/Debugging tests via Test Runner: 

* To open Cypress UI, run the following command:
    ```sh 
    $ yarn run start
    ```

#### 4. Generating reports and view them:

* To generate reports, add the following flag at the end of the test:
    ```sh 
    $ yarn run test --spec cypress/integration/sanity_production.spec.js --reporter mochawesome
    ```

* To generate reports using bash script:
    ```sh 
    $ sh scripts/cli/run_test.bash cypress/integration/sanity_production.spec.js 
    ```
