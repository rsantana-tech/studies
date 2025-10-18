import userData from '../fixtures/user/user-data.json'
import LoginPage from '../pages/login.js'
import DashboardPage  from '../pages/dashboard.js';
import MenuPages from '../pages/menuPages.js';
import MyInfo from '../pages/myInfo.js';


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
    infoPage.fillPersonalDetails('Anna', 'laila', 'Silva');
    infoPage.fillEmploymentDetails('12345', '67890', 'A1234567', '2025-12-31');
    infoPage.saveUserInfo();
  })

})