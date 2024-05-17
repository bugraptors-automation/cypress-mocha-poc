class CheckoutCompletePage{
    get orderCompletedMessage() {
        return cy.get(".complete-header")
    }
} 
let checkoutCompletePage = new CheckoutCompletePage()
export default checkoutCompletePage