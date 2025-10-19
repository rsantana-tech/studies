# tests — Test automation study examples

This folder contains study projects and examples for several test automation frameworks and tools. The goal is to gather small, focused examples you can run locally and use as a learning resource: Cypress (end-to-end browser testing), Selenium (WebDriver), pytest (Python testing), and Playwright (browser automation).

Structure
---------
- `cypress/` — Cypress study project with Page Objects, fixtures and example specs. (See `cypress/README.md` inside this folder for details.)
- `selenium/` — (placeholder) Add Selenium/JavaScript or Selenium/Python examples here.
- `pytest/` — (placeholder) Add pytest examples and fixtures here.
- `playwright/` — (placeholder) Add Playwright examples here.

Purpose
-------
- Provide minimal, reproducible examples for learning different testing frameworks.
- Serve as a sandbox to experiment with selectors, fixtures, page objects, and CI integration.
- Collect notes and common troubleshooting steps for each tool.

Getting started (Cypress)
-------------------------
The Cypress project is already included under `cypress/first-steps-cypress`.

From the repository root:

```bash
cd tests/cypress/first-steps-cypress
npm install
npx cypress open    # interactive runner
# or run headless
npx cypress run
```

Add your `baseUrl` in `cypress.config.js` if tests point to a local or remote app instance.

Placeholders for other frameworks
--------------------------------
I intentionally left folders for Selenium, pytest and Playwright as placeholders. You can populate them with small examples following these suggestions:

- Selenium (JavaScript or Python): a simple test that opens a browser, navigates to a page, and asserts an element is visible. Use WebDriver manager to avoid manual binary installs.
- pytest (Python): unit and integration tests using `pytest` and `requests` or `selenium` for browser tests. Add `requirements.txt` and virtualenv instructions.
- Playwright: a minimal Playwright project using `@playwright/test` with an example spec and a `playwright.config.ts`.

CI suggestions
--------------
- Add lightweight CI workflows per tool; for Cypress and Playwright use official GitHub Actions or community actions that handle browsers.
- Example for Cypress is available in the repository root `README.md` (GitHub Actions snippet).

Contributions
-------------
Feel free to add small, focused examples for any of the listed frameworks. Keep each example minimal, documented, and include a README inside each framework folder explaining how to run it.

License
-------
MIT — feel free to reuse the examples for learning and teaching.
