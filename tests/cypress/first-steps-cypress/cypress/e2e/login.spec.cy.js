import userData from '../fixtures/user/user-data.json'
import LoginPage from '../pages/login.js'


const loginPage = new LoginPage();


describe('Login - Orange HRM Test', () => {

  it('Login - fail', () => {
    loginPage.accessLoginPage();
    loginPage.loginWithUser(userData.userFail.username, userData.userFail.password);
    cy.get(loginPage.selectorList().errorAlert).should('be.visible');
  })

  it('Login - Sucess', () => {
    loginPage.accessLoginPage();
    loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password);
  })  

})