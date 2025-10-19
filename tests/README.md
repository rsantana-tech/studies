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
# tests — Test automation study examples

This folder contains focused, minimal examples for multiple test automation tools used for learning and experimentation. Frameworks covered here:

- Cypress (end-to-end browser testing with JavaScript)
- Selenium (WebDriver-based browser automation, examples in Python/JS)
- pytest (Python unit/functional tests)
- Playwright (browser automation for JS/TS/Python)

Structure
---------

- `cypress/` — Cypress projects (page objects, fixtures, example specs). See `cypress/README.md` inside each Cypress project for details.
- `selenium/` — Small Selenium examples and notes (may contain Python or JS samples).
- `pytest/` — Python pytest examples for unit/integration testing.
- `playwright/` — Playwright examples and basic setup notes.

Goals
-----

- Provide runnable, minimal examples you can open and execute locally.
- Illustrate common patterns: page objects, fixtures, test data, and simple assertions.
- Show how to run tests locally and in CI (GitHub Actions examples and tips).

Prerequisites
-------------

- Node.js (recommended LTS) for Cypress and Playwright JS examples
- npm or yarn
- Python 3.8+ for Selenium/pytest examples
- Browser drivers when required (chromedriver/geckodriver) for Selenium

Quick start — Cypress
---------------------

1. Open the Cypress project (example path used in this repository):

```bash
cd tests/cypress/first-steps-cypress
npm install
```

2. Run interactively (opens the GUI):

```bash
npx cypress open
```

3. Or run headless (CI-friendly):

```bash
npx cypress run
```

Notes:
- Set or verify `baseUrl` in `cypress.config.js` if tests target a running application.
- Use fixtures in `cypress/fixtures/` to provide test data for repeatable runs.

Quick start — Selenium (Python example)
--------------------------------------

1. Create a virtual environment and install dependencies:

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r tests/selenium/requirements.txt
```

2. Ensure a browser driver is available (chromedriver for Chrome, geckodriver for Firefox). On most OSs you can install via package manager or add to PATH.

3. Run an example:

```bash
python tests/selenium/examples/test_login.py
```

Quick start — pytest
--------------------

If you have pytest based examples under `tests/pytest`:

```bash
cd tests/pytest
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
pytest -q
```

Quick start — Playwright (JavaScript)
-------------------------------------

1. Install:

```bash
cd tests/playwright
npm install
npx playwright install
```

2. Run tests:

```bash
npx playwright test
```

CI tips (GitHub Actions)
------------------------

- Use the official setup actions for Node.js or Python and install browser dependencies. Example steps for Cypress/Playwright:
	- checkout
	- setup-node (or setup-python)
	- install dependencies (npm ci / pip install)
	- install browsers (npx playwright install)
	- run tests (npx cypress run / npx playwright test)

- Cache node_modules or pip cache between runs to speed up builds.
- Run tests headless in CI and upload artifacts (screenshots, videos, test reports) on failure.

Troubleshooting
---------------

- If a test cannot find elements, verify selectors and consider adding `.should('be.visible')` (Cypress) or explicit waits (Selenium/Playwright).
- Keep test data (fixtures) small and deterministic to avoid flakiness.
- When tests require a running app, ensure app start steps are included in CI workflow (or use service containers).

Where to find each example
--------------------------

- Cypress examples: `tests/cypress/**`
- Selenium examples: `tests/selenium/**` (may be absent in some snapshots)
- pytest examples: `tests/pytest/**`
- Playwright examples: `tests/playwright/**`

Contributing / extending
------------------------

If you add more examples, follow these guidelines:
- Keep examples minimal and self-contained.
- Add a short README under the example folder describing how to run it.
- Prefer reproducible commands (use lockfiles or pinned requirements).

License
-------
MIT — reuse and adapt for learning.
