describe('Orange HRM Test', () => {
  it.skip('Login - sucess', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('#app [name="username"]').click();
    cy.get('#app [name="username"]').type('Admin');
    cy.get('#app [name="password"]').click();
    cy.get('#app [name="password"]').type('admin123');
    cy.get('#app button.oxd-button').click();
    cy.location('pathname').should('eq', '/web/index.php/dashboard/index');
    cy.get('.orangehrm-dashboard-grid').should('be.visible');

  })
  it('Login - fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get('#app [name="username"]').click();
    cy.get('#app [name="username"]').type('test');
    cy.get('#app [name="password"]').click();
    cy.get('#app [name="password"]').type('test');
    cy.get('#app button.oxd-button').click();
    cy.get('.oxd-alert--error').should('be.visible');
  })
})