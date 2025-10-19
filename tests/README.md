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

# tests — Exemplos de estudo de automação de testes (pt-BR)

Esta pasta reúne exemplos e pequenos projetos para aprender ferramentas e frameworks de automação de testes. O objetivo é oferecer exemplos mínimos e reproduzíveis que você possa executar localmente para estudar: Cypress (E2E em JS), Selenium (WebDriver), pytest (Python) e Playwright.

Estrutura
---------

- `cypress/` — Projetos e exemplos com Cypress (page objects, fixtures e specs). Veja o `cypress/README.md` dentro de cada projeto Cypress para detalhes.
- `selenium/` — Exemplos e notas do Selenium (Python/JS) quando disponíveis.
- `pytest/` — Exemplos com pytest (Python).
- `playwright/` — Exemplos com Playwright (JS/TS/Python).

Objetivos
---------

- Fornecer exemplos executáveis e mínimos para estudo.
- Demonstrar padrões comuns: page objects, fixtures, dados de teste e assertivas simples.
- Mostrar como executar localmente e em CI (GitHub Actions) com dicas práticas.

Pré-requisitos
--------------

- Node.js (versão LTS recomendada) para exemplos em Cypress e Playwright (JS)
- npm ou yarn
- Python 3.8+ para exemplos em Selenium/pytest
- Drivers de navegador quando necessário (chromedriver, geckodriver) para Selenium

Início rápido — Cypress
----------------------

1. Acesse o projeto de exemplo (exemplo de caminho neste repositório):

```bash
cd tests/cypress/first-steps-cypress
npm install
```

2. Executar de forma interativa (abre a GUI):

```bash
npx cypress open
```

3. Ou executar headless (modo CI):

```bash
npx cypress run
```

Observações:
- Configure `baseUrl` em `cypress.config.js` se os testes acessarem uma aplicação local/remo­ta.
- Use fixtures em `cypress/fixtures/` para dados de teste estáveis.

Início rápido — Selenium (exemplo em Python)
------------------------------------------

1. Crie um virtualenv e instale dependências:

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r tests/selenium/requirements.txt
```

2. Garanta que o driver do navegador esteja disponível (chromedriver/geckodriver). Em muitos sistemas você pode instalar via gerenciador de pacotes ou colocá-lo no PATH.

3. Execute um exemplo:

```bash
python tests/selenium/examples/test_login.py
```

Início rápido — pytest
---------------------

Se houver exemplos com pytest em `tests/pytest`:

```bash
cd tests/pytest
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
pytest -q
```

Início rápido — Playwright (JavaScript)
--------------------------------------

1. Instale dependências e navegadores:

```bash
cd tests/playwright
npm install
npx playwright install
```

2. Execute os testes:

```bash
npx playwright test
```

Dicas para CI (GitHub Actions)
------------------------------

- Use as actions oficiais para Node.js / Python e instale dependências de navegador. Um fluxo típico inclui:
	- checkout
	- setup-node (ou setup-python)
	- instalar dependências (npm ci / pip install)
	- instalar navegadores (npx playwright install)
	- executar testes (npx cypress run / npx playwright test)

- Faça cache de node_modules ou do cache do pip para acelerar builds.
- Execute em modo headless no CI e envie artefatos (screenshots, vídeos, relatórios) em caso de falha.

Resolução de problemas
----------------------

- Se um teste não localizar elementos, verifique os seletores e considere usar `.should('be.visible')` (Cypress) ou esperas explícitas (Selenium/Playwright).
- Mantenha dados de teste (fixtures) pequenos e determinísticos para reduzir instabilidade.
- Quando os testes dependem de uma aplicação em execução, inclua as etapas de inicialização da aplicação no workflow de CI (ou use containers de serviço).

Onde encontrar cada exemplo
---------------------------

- Cypress: `tests/cypress/**`
- Selenium: `tests/selenium/**` (pode faltar em alguns snapshots)
- pytest: `tests/pytest/**`
- Playwright: `tests/playwright/**`

Contribuindo / estendendo
------------------------

Ao adicionar novos exemplos, siga estas recomendações:
- Mantenha exemplos pequenos e autocontidos.
- Adicione um README curto na pasta do exemplo descrevendo como executar.
- Prefira comandos reprodutíveis (use lockfiles ou requirements pinados).

Licença
-------
MIT — sinta-se à vontade para reutilizar e adaptar para aprendizado.

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
