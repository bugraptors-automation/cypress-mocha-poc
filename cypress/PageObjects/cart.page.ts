class CartPage{
    get inventoryItemName(){
        return cy.get(".inventory_item_name")
    }

    get inventoryItemPrice(){
        return cy.get(".inventory_item_price")
    }

    get checkOutBtn(){
        return cy.get(".checkout_button")
    }
}
let cartPage = new CartPage()
export default cartPage;