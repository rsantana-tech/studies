import userData from '../fixtures/user/user-data.json'
import LoginPage from '../pages/login.js'
import DashboardPage  from '../pages/dashboard.js';
import MenuPages from '../pages/menuPages.js';
import MyInfo from '../pages/myInfo.js';

const Chance = require('chance');


const chance = new Chance();
const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();
const menuPages = new MenuPages();
const infoPage = new MyInfo();

describe('Orange HRM Test', () => {

  it('User - Info - Update', () => {
    loginPage.accessLoginPage();
    loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password);
    dashboardPage.verifyDashboardIsVisible();
    menuPages.accessInfoMenu();
    infoPage.fillPersonalDetails(chance.first(),chance.last(), chance.last());
    infoPage.fillEmploymentDetails(chance.natural({ min: 10000, max: 99999 }),chance.natural({ min: 10000, max: 99999 }), chance.natural({ min: 10000, max: 99999 }), '2025-12-31');
    infoPage.saveUserInfo();
  })

})