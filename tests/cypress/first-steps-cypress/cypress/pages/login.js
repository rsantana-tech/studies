class LoginPage {
    selectorList(){
        const selectors = {
            usernameInput: "[name='username']",
            passwordInput: "[name='password']",
            loginButton: '#app button.oxd-button',
            errorAlert: '.oxd-alert--error',
        };
        return selectors;
    }


    accessLoginPage(){
        cy.visit('/auth/login');
    }
    loginWithUser(username, password) {
        cy.get(this.selectorList().usernameInput).type(username)
        cy.get(this.selectorList().passwordInput).type(password)
        cy.get(this.selectorList().loginButton).click()
    }

}

export default LoginPage;