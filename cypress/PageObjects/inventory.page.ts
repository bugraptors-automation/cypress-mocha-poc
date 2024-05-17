class InventoryPage{
    get products() {
        return cy.get(".inventory_list .inventory_item")
    }

    get shoppingCartIcon(){
        return cy.get(".shopping_cart_link")
    }
}
let inventoryPage = new InventoryPage();
export default inventoryPage;