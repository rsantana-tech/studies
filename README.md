# Studies — Cypress test automation (first-steps-cypress)

Short description
-----------------
This repository contains study examples for end-to-end testing using Cypress. It demonstrates the Page Object pattern, fixtures for test data, and specs for login and user info update flows against the Orange HRM demo site (educational purposes).

Status
------
- Test framework: Cypress
- Main spec: `tests/cypress/first-steps-cypress/cypress/e2e/user.spec.cy.js`

Prerequisites
-------------
- Node.js (LTS recommended)
- npm (or yarn)
- Access to the application under test (set `baseUrl` in `cypress.config.js` if needed)

Install
-------
Clone and install dependencies:

```bash
git clone https://github.com/rsantana-tech/studies.git
cd studies/tests/cypress/first-steps-cypress
npm install
# or
# yarn
```

Run tests
---------
Open Cypress UI (interactive):

```bash
npx cypress open
```

Run headless (all specs):

```bash
npx cypress run
```

Run a specific spec (from project root):

```bash
npx cypress run --spec "tests/cypress/first-steps-cypress/cypress/e2e/user.spec.cy.js"
```

Repository structure (relevant)
------------------------------
tests/cypress/first-steps-cypress/
- `cypress.config.js` — Cypress configuration (baseUrl, timeouts, etc.)
- `package.json` — scripts/dependencies
- `cypress/`
  - `e2e/`
    - `login.spec.cy.js`
    - `user.spec.cy.js`
  - `fixtures/`
    - `user/user-data.json`
  - `pages/` — Page Objects:
    - `login.js`
    - `myInfo.js`
    - `dashboard.js`
    - `menuPages.js`
  - `support/` — custom commands and global setup

How tests are organized
-----------------------
- Page Object Pattern: each page is represented by a class that exposes selectors and actions (e.g. `LoginPage`, `MyInfo`).
- Fixtures: test data lives in `cypress/fixtures` and are imported into specs.
- Specs use Page Object methods to keep tests readable and reusable.

Common issues and fixes (you encountered these)
-----------------------------------------------

1) Module import error / webpack failure
- Symptom: webpack/Cypress compilation fails with module not found or weird stack trace.
- Common cause: an extra whitespace or typos in the import path.
- Bad example:
  ```js
  import LoginPage from '../pages/login.js '
  ```
- Fix:
  ```js
  import LoginPage from '../pages/login.js'
  // or
  import LoginPage from '../pages/login'
  ```

2) "Expected to find element: undefined" (Timed out retrying)
- Symptom: `cy.get(undefined)` leads to a timeout and stack trace.
- Cause: the selector value is `undefined` because the code attempted to access selectors incorrectly.
- Example problem: defining `selectorList` as a method but accessing it as a property:
  ```js
  // wrong: selectorList() { return {...} } but used as this.selectorList.usernameInput
  ```
- Fix (recommended): make selectors an object property on the class:
  ```js
  // login.js (class)
  selectorList = {
    usernameInput: "[name='username']",
    passwordInput: "[name='password']",
    loginButton: '#app button.oxd-button',
    errorAlert: '.oxd-alert--error'
  }
  // usage: this.selectorList.usernameInput
  ```
- Or, if you keep it as a method, call it: `this.selectorList().usernameInput`.

3) "Cannot read properties of undefined (reading 'firstNameInput')"
- Symptom: calling `this.selectList().firstNameInput` when `selectList()` does not return an object.
- Cause: method forgets to return the selectors object (or the property is misspelled).
- Fix: return object or convert to property. Example corrected `myInfo.js` pattern:
  ```js
  // myInfo.js
  selectorList = {
    firstNameInput: ".orangehrm-firstname",
    middleNameInput: ".orangehrm-middlename",
    lastNameInput: ".orangehrm-lastname",
    genericSelector: '.oxd-input',
    closeButtonDatePicker: '.--close',
    buttonSave: '.orangehrm-left-space',
    genericComboBox: '.oxd-select-text-input',
  }
  // use: cy.get(this.selectorList.firstNameInput)...
  ```

Best practices / recommendations
--------------------------------
- Use stable, unique selectors in Page Objects.
- Add `.should('be.visible')` before interacting to reduce flakiness.
- Avoid committing `it.only` (it restricts runs to a single test).
- Centralize test data in `fixtures` and selectors in `pages`.
- If interacting with dynamic lists by index, validate the list length first or prefer specific selectors to avoid brittle tests.

Example corrected usage in spec
-------------------------------
```js
import userData from '../fixtures/user/user-data.json'
import LoginPage from '../pages/login'

const loginPage = new LoginPage()

it('Login - fail', () => {
  loginPage.accessLoginPage()
  loginPage.loginWithUser(userData.userFail.username, userData.userFail.password)
  cy.get(loginPage.selectorList.errorAlert).should('be.visible')
})
```

Minimal GitHub Actions example (CI)
----------------------------------
Create `.github/workflows/cypress.yml` to run tests on push/PR:

```yaml
name: Cypress tests

on:
  push:
    branches: [ main ]
  pull_request:

jobs:
  cypress-run:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Use Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 18
      - name: Install dependencies
        run: npm ci
        working-directory: tests/cypress/first-steps-cypress
      - name: Run Cypress tests
        run: npx cypress run
        working-directory: tests/cypress/first-steps-cypress
```

Tips for debugging locally
--------------------------
- Use `npx cypress open` to see the runner and browser console logs.
- Add temporary `console.log(...)` calls inside page objects to inspect selectors at runtime.
- Increase command timeouts only if necessary; prefer reliable selectors and visibility checks.
- When a selector is `undefined`, trace where it is defined (page object) and how it is accessed in the spec.
