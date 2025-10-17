import userData from '../fixtures/user/user-data.json'

describe('Orange HRM Test', () => {
  const selectorList = {
    usernameInput: "[name='username']",
    passwordInput: "[name='password']",
    loginButton: '#app button.oxd-button',
    dashboardGrid: '.orangehrm-dashboard-grid',
    errorAlert: '.oxd-alert--error',
    pathInfo: '/web/index.php/pim/viewPersonalDetails/empNumber/7',
    firstNameInput: ".orangehrm-firstname",
    middleNameInput: ".orangehrm-middlename",
    lastNameInput: ".orangehrm-lastname",
    genericSelector: '.oxd-input',
    closeButtonDatePicker: '.--close',
    buttonSave: '.orangehrm-left-space',
    genericComboBox: '.oxd-select-text-input',
  }

  it.only('User - Info - Update', () => {
    cy.visit('/auth/login');
    cy.get(selectorList.usernameInput).should('be.visible').type(userData.userSucess.username);
    cy.get(selectorList.passwordInput).type(userData.userSucess.password);
    cy.get(selectorList.loginButton).click();
    cy.location('pathname').should('eq', '/web/index.php/dashboard/index');
    cy.get(selectorList.dashboardGrid).should('be.visible');
    cy.get("[href='/web/index.php/pim/viewMyDetails']").click();
    cy.location('pathname').should('eq', selectorList.pathInfo);
    cy.get(selectorList.firstNameInput).clear().type('FirstName');
    cy.get(selectorList.middleNameInput).clear().type('MiddleName');
    cy.get(selectorList.lastNameInput).clear().type('LastName');
    cy.get(selectorList.genericSelector).eq(4).clear().type('testnickname');
    cy.get(selectorList.genericSelector).eq(5).clear().type('999999999');
    cy.get(selectorList.genericSelector).eq(6).clear().type('999999999');
    cy.get(selectorList.genericSelector).eq(7).clear().type('license');
    cy.get(selectorList.genericSelector).eq(8).clear().type('2025-10-16');
    cy.get(selectorList.closeButtonDatePicker).click();
    cy.get(selectorList.genericComboBox).eq(0).click();
    cy.get('[role="listbox"]').contains('[role="option"]', 'Brazilian').click();
    cy.get(selectorList.genericComboBox).eq(1).click();
    cy.get('[role="listbox"]').contains('[role="option"]', 'Single').click();
    cy.get(selectorList.genericSelector).eq(8).clear().type('2025-10-16');
    cy.get(selectorList.closeButtonDatePicker).click();
    cy.contains('.--gender-grouped-field label', 'Female').click();
    cy.get(selectorList.buttonSave).eq(0).click();
    cy.get('body').should('contain', 'Successfully');
    cy.get('.oxd-toast-close--success').click();
   
  })

  it('Login - fail', () => {
    cy.visit('/auth/login');
    cy.get(selectorList.usernameInput).type(userData.userFail.username);
    cy.get(selectorList.passwordInput).click().type(userData.userFail.password);
    cy.get(selectorList.loginButton).click();
    cy.get(selectorList.errorAlert).should('be.visible');

  })
})