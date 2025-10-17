import userData from '../fixtures/user/user-data.json'
import LoginPage from '../pages/login.js'
import DashboardPage  from '../pages/dashboard.js';
import MenuPages from '../pages/menuPages.js';
import myInfoPage from '../pages/myInfo.js';


const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();
const menuPages = new MenuPages();
const infoPage = new myInfoPage();

describe('Orange HRM Test', () => {

  it.only('User - Info - Update', () => {
    loginPage.accessLoginPage();
    loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password);
    dashboardPage.verifyDashboardIsVisible();
    menuPages.accessInfoMenu();
    infoPage.updateUserInfo();
  })

  it('Login - fail', () => {
    cy.visit('/auth/login');
    cy.get(selectorList.usernameInput).type(userData.userFail.username);
    cy.get(selectorList.passwordInput).click().type(userData.userFail.password);
    cy.get(selectorList.loginButton).click();
    cy.get(selectorList.errorAlert).should('be.visible');

  })
})