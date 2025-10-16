describe('Orange HRM Test', () => {
  it('Login - sucess', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('#app [name="username"]').click();
    cy.get('#app [name="username"]').type('Admin');
    cy.get('#app [name="password"]').click();
    cy.get('#app [name="password"]').type('admin123');
    cy.get('#app button.oxd-button').click();
  })
})