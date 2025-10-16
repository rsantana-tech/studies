describe('Orange HRM Test', () => {
  const selectorList = {
    usernameInput: '#app [name="username"]',
    passwordInput: '#app [name="password"]',
    loginButton: '#app button.oxd-button',
    dashboardGrid: '.orangehrm-dashboard-grid',
    errorAlert: '.oxd-alert--error'
  }

  it.skip('Login - sucess', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.usernameInput).click().type('Admin');
    cy.get(selectorList.passwordInput).click().type('admin123');
    cy.get(selectorList.loginButton).click();
    cy.location('pathname').should('eq', '/web/index.php/dashboard/index');
    cy.get('.orangehrm-dashboard-grid').should('be.visible');

  })
  it('Login - fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.usernameInput).click().type('test');
    cy.get(selectorList.passwordInput).click().type('test');
    cy.get(selectorList.loginButton).click();
    cy.get(selectorList.errorAlert).should('be.visible');
    
  })
})