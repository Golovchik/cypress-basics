# cypress-basics
Cypress Basics

Prerequisite: You should have Node.js installed (Node.js)

To install Cypress, perform the following steps using Node.js:

Create a new folder
Initiate new npm project – npm init
Install cypress – npm install cypress
Open Cypress app - npx cypress open or run tests npx cypress run

CLI. Reporting :
npx cypress run --spec cypress/e2e/api/posts.cy.js --browser chrome
npm i --save-dev cypress-mochawesome-reporter
and add 2 strings in cypress.config.js