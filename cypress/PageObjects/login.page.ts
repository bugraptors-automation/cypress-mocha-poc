class LoginPage {
    get usernameField() {
        return cy.get('#user-name');
    }

    get passwordField() {
        return cy.get('#password');
    }

    get loginBtn() {
        return cy.get('#login-button');
    }
}

let loginPage = new LoginPage()
export default loginPage
