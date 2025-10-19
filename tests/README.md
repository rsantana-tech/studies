# Tests — Estudos de automação (Cypress, Selenium, pytest, Playwright)

Este diretório contém estudos e exemplos de automação de testes usando diferentes ferramentas:
- Cypress (E2E, JavaScript)
- Selenium WebDriver (exemplos em JavaScript/Python conforme necessário)
- pytest (testes em Python)
- Playwright (E2E, suportando JS/TS e Python)

Objetivo
--------
Reunir exemplos práticos, boas práticas e instruções para executar testes locaismente e em CI. O foco é educacional — cada subprojeto contém um conjunto mínimo de testes, fixtures e page-objects para estudo.

Status geral
------------
- Exemplos Cypress: `tests/cypress/first-steps-cypress` e `tests/post-comment-react-app/cypress`
- Outros frameworks podem ser adicionados como subpastas com suas próprias instruções.

Pré-requisitos (geral)
---------------------
- Node.js (v16+ ou LTS recomendada) para projetos JavaScript/TypeScript
- Python 3.8+ para exemplos com pytest/Playwright (Python)
- pip ou venv para gerenciar dependências Python
- Browsers: Chrome/Chromium e/ou Firefox (usados pelo Cypress/Playwright)

Como usar (visão rápida)
------------------------
1. Clone o repositório:

```bash
git clone https://github.com/rsantana-tech/studies.git
cd studies/tests
```

2. Instale dependências do exemplo desejado.

Exemplo: Cypress (primeiro-steps)

```bash
cd first-steps-cypress
npm install
# abrir runner interativo
npx cypress open
# rodar headless
npx cypress run
```

Exemplo: Playwright (JS/TS) — se houver um subprojeto

```bash
cd some-playwright-folder
npm install
npx playwright install
npx playwright test
```

Exemplo: pytest (Python)

```bash
cd some-pytests-folder
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
pytest -q
```

Exemplo: Selenium (JS)

```bash
cd some-selenium-folder
npm install
# executar script que inicializa webdriver/selenium server conforme o exemplo
node run-tests.js
```

Estrutura sugerida
------------------
- `first-steps-cypress/` — projeto Cypress com `cypress.config.js`, `cypress/e2e`, `pages`, `fixtures`.
- `post-comment-react-app/` — app de exemplo com testes E2E em Cypress para praticar.
- `playwright/` — (opcional) testes Playwright organizados com fixtures e testes.
- `pytest/` — (opcional) testes em Python organizados com `conftest.py` e `requirements.txt`.

Boas práticas e dicas
---------------------
- Use Page Object Pattern para organizar seletores e ações em testes E2E.
- Centralize dados de teste em `fixtures` (JSON ou arquivos similares).
- Evite seletores frágeis (prefira atributos `data-*` sempre que possível).
- Adicione `should('be.visible')` ou esperas explícitas quando necessário para reduzir flakiness.
- Execute testes localmente antes de configurar CI.

CI (exemplo rápido)
-------------------
Para rodar testes em CI (GitHub Actions) crie um workflow que:
- faça checkout do código
- instale dependências (npm ci / pip install -r requirements.txt)
- instale browsers (quando necessário)
- execute `npx cypress run` / `pytest` / `npx playwright test`

Exemplo mínimo para Cypress (GitHub Actions):

```yaml
name: Cypress tests

on: [push, pull_request]

jobs:
  cypress:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Install Node
        uses: actions/setup-node@v4
        with:
          node-version: 18
      - name: Install deps
        run: npm ci
        working-directory: tests/cypress/first-steps-cypress
      - name: Run Cypress
        run: npx cypress run
        working-directory: tests/cypress/first-steps-cypress
```

Troubleshooting (erros comuns)
-----------------------------
- `cy.get(undefined)` / `Expected to find element: undefined`: verifique se os seletores estão definidos e utilizados corretamente (método vs propriedade). Use `console.log` para debugar.
- Erro de import/webpack: confira espaços ou erros no caminho do `import` e extensões; prefira caminhos relativos corretos.
- Permissão de push (403): verifique se o remote aponta para seu fork ou se você tem permissão no repositório remoto.

Contribuindo
------------
- Sinta-se livre para abrir PRs com novos exemplos, correções de seletores, melhorias de documentação e exemplos em outros frameworks.
- Para novos subprojetos inclua um `README.md` local explicando como executar os testes daquele exemplo.

Licença
-------
Conteúdo de estudo — escolha e adicione a licença desejada no repositório raiz, por exemplo MIT.
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
