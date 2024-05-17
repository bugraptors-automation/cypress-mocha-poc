
# Project Title

This project is a demo of how to use Cypress to automate e2e flow for web.

## Prequiste
Install Node js
```bash
Link - https://nodejs.org/en/download/current
```
## Installation

To install the project, follow the steps below
 
Steps To install dependencies of project
  ```bash
  1. Open the new vscode terminal
  ```
  ```bash
  2. Execute: npm i
  ```
If you will face a issue like cypress not installed, execute a below command
```bash
   npm install cypress
```

  ## Commands to execute test 

To run test files in test runner

```bash
   npx cypress open
```

To run test files in headless mode

```bash
   npx cypress run
```

## Folder Structure

```bash
cypress-project/
  ├── cypress/
  │   ├── fixtures/
  │   │   └── cred.json
  │   │   └── contants.ts
  │   ├── e2e
  |   |     └── example.cy.ts
  |   └── pageObjects
  │   │           └── login
  |   |                └── example.page.ts
  │   └── support/     
  │       ├── commands.ts
  │       └── e2e.ts
  ├── node_modules/
  ├── .gitignore
  ├── cypress.config.json
  ├── package-lock.json
  └── package.json
```

  The cypress directory contains all the test files and configuration for Cypress. Here's what each directory contains:


fixtures: contains data used by tests, such as JSON or CSV files.

e2e: contains the actual tests written in typescript files.

support: contains typescript files that can be used to write custom commands or hooks.

## Cypress Configuration

The cypress.config.json file contains configuration options for cypress. You can set various options such as the base URL for the application, the viewport size, and much more.
## Writing Tests

Tests are written using cypress's built-in testing framework. To write a test, create a new file in the cypress/e2e directory and use the describe and it functions to define your test suites and test cases

```bash
describe('Example test suite', () => {
  it('Example test case', () => {
    // Test code goes here
  })
})
```

You can use various cypress commands such as cy.visit(), cy.get(), cy.click(), and many more to interact with the application and perform actions.