# tests — Test automation study examples

This folder contains study projects and examples for several test automation frameworks and tools. The goal is to gather small, focused examples you can run locally and use as a learning resource: Cypress (end-to-end browser testing), Selenium (WebDriver), pytest (Python testing), and Playwright (browser automation).

Structure
---------
- `cypress/` — Cypress study project with Page Objects, fixtures and example specs. (See `cypress/README.md` )
- `selenium/`
- `pytest/` 
- `playwright/`

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


License
-------
MIT — feel free to reuse the examples for learning and teaching.
