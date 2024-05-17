class CheckoutPage{
    get firstNameField() {
        return cy.get("#first-name")
    }

    get lastNameField() {
        return cy.get("#last-name")
    }

    get postalCodeField() {
        return cy.get("#postal-code")
    }

    get continueBtn(){
        return cy.get(".cart_button")
    }
}
let checkoutPage = new CheckoutPage()
export default checkoutPage;