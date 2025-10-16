import userData from '../fixtures/user/user-data.json'

describe('Orange HRM Test', () => {
  const selectorList = {
    usernameInput: "[name='username']",
    passwordInput: "[name='password']",
    loginButton: '#app button.oxd-button',
    dashboardGrid: '.orangehrm-dashboard-grid',
    errorAlert: '.oxd-alert--error'
  }

  it('Login - sucess', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.wait(5000);
    cy.get(selectorList.usernameInput).should('be.visible').type(userData.userSucess.username);
    cy.get(selectorList.passwordInput).type(userData.userSucess.password);
    cy.get(selectorList.loginButton).click();
    cy.location('pathname').should('eq', '/web/index.php/dashboard/index');
    cy.get('.orangehrm-dashboard-grid').should('be.visible');

  })
  it('Login - fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.wait(5000);
    cy.get(selectorList.usernameInput).type(userData.userFail.username);
    cy.get(selectorList.passwordInput).click().type(userData.userFail.password);
    cy.get(selectorList.loginButton).click();
    cy.get(selectorList.errorAlert).should('be.visible');

  })
})