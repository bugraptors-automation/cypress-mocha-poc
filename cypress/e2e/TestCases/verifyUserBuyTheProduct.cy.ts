import inventoryPage from '../../PageObjects/inventory.page';
import cartPage from '../../PageObjects/cart.page';
import checkoutPage from '../../PageObjects/checkout.page';
import checkoutCompletePage from '../../PageObjects/checkoutComplete.page';
import cred from '../../fixtures/cred.json'
import { ADD_TO_CART, BARAK, CART_PAGE_ENDPOINT, CHECKOUT_COMPLETE_ENDPOINT, CHECKOUT_STEPONE_PAGE_ENDPOINT, CHECKOUT_STEPTWO_PAGE_ENDPOINT, INVENTORY_PAGE_ENDPOINT, POSTAL_CODE, ROHIT, THANK_YOU_MESSAGE } from '../../fixtures/constants';
let inventoryItemName:string;
let inventoryItemPrice:string;
describe('Verification of buying product', () => {
  it('verify user buy the product successfully', () => {
    cy.login(cred.saucedemo.admin.username, cred.saucedemo.admin.password);
    //verify user is on inventory page
    cy.url().should('contain', INVENTORY_PAGE_ENDPOINT);
    //add the product
    inventoryPage.products.then($el => {
      cy.wrap($el).should('have.length', 6);
      cy.wrap($el).first().find('.inventory_item_name').then($el => {
        inventoryItemName = $el.text();
      });
      cy.wrap($el).first().find('.inventory_item_price').then($el => {
        inventoryItemPrice = $el.text();
      });
      cy.wrap($el).first().find('button').should("be.enabled").and("contain.text",ADD_TO_CART).click()
    });
    inventoryPage.shoppingCartIcon.scrollIntoView().should("be.visible").click()
    //verify user is on cart page
    cy.url().should("contain", CART_PAGE_ENDPOINT)
    //verify same product has added
    cartPage.inventoryItemName.then(($el) => {
      cy.wrap($el).should("be.visible").and("contain.text", inventoryItemName)
    })
    cartPage.inventoryItemPrice.then(($el) => {
      cy.wrap($el).should("be.visible").and("contain.text", inventoryItemPrice)
    })
    cartPage.checkOutBtn.should("be.visible").click()
    //verify user is on checkout step one page
    cy.url().should("contain", CHECKOUT_STEPONE_PAGE_ENDPOINT)
    checkoutPage.firstNameField.should("be.enabled").type(ROHIT)
    checkoutPage.lastNameField.should("be.enabled").type(BARAK)
    checkoutPage.postalCodeField.should("be.enabled").type(POSTAL_CODE)
    checkoutPage.continueBtn.should("be.enabled").click()
    //verify user is on checkout step two page
    cy.url().should("contain", CHECKOUT_STEPTWO_PAGE_ENDPOINT)
    cartPage.inventoryItemName.then(($el) => {
      cy.wrap($el).should("be.visible").and("contain.text", inventoryItemName)
    })
    cartPage.inventoryItemPrice.then(($el) => {
      cy.wrap($el).should("be.visible").and("contain.text", inventoryItemPrice)
    })
    checkoutPage.continueBtn.should("be.enabled").click()
    //verify user is on checkout complete page
    cy.url().should("contain", CHECKOUT_COMPLETE_ENDPOINT)
    checkoutCompletePage.orderCompletedMessage.should("be.visible").and("contain.text", THANK_YOU_MESSAGE)
  });
});
