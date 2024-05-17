import loginPage from "../PageObjects/login.page"

Cypress.Commands.add('login', (email:string, password:string) => { 
loginPage.usernameField.should("be.enabled").type(email)
loginPage.passwordField.should("be.enabled").type(password)
loginPage.loginBtn.should("be.enabled").click()
 })
