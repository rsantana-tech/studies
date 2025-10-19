import userData from '../fixtures/user/user-data.json'
import LoginPage from '../pages/login.js'
import DashboardPage  from '../pages/dashboard.js';

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();


describe('Login - Orange HRM Test', () => {

  it('Login - fail', () => {
    loginPage.accessLoginPage();
    loginPage.loginWithUser(userData.userFail.username, userData.userFail.password);
    cy.get(loginPage.selectorList().errorAlert).should('be.visible');
  })

  it('Login - Sucess', () => {
    loginPage.accessLoginPage();
    loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password);
    dashboardPage.verifyDashboardIsVisible(); 
  
  })  

})