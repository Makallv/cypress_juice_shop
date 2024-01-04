import Pages from "../support/pages";
import {userData} from "../support/userData";

describe("Shopping", () => {

  beforeEach(() => {
    Pages.basePage.visit();
    Pages.basePage.closeWelcomeBanner.click();
  })

    it('Register new user', () => {
        Pages.basePage.accountButton.click();
        Pages.basePage.loginButton.click();
        Pages.loginPage.emailInput.should("be.visible");
        Pages.loginPage.passwordInput.should("be.visible");
        Pages.loginPage.registerLink.click();
        Pages.registerPage.emailInput.type(userData.email);
        Pages.registerPage.passwordInput.type(userData.password);
        Pages.registerPage.repeatPasswordInput.type(userData.password);
        Pages.registerPage.securityQuestionInput.click()
        Pages.registerPage.securityQuestionOptions.contains("Mother's maiden name").click();
        Pages.registerPage.securityAnswerInput.type(userData.word);
        Pages.registerPage.registerButton.click();
    });

    it('Checkout', () => {
        Pages.basePage.accountButton.click();
        Pages.basePage.loginButton.click();
        Pages.loginPage.emailInput.type(userData.email);
        Pages.loginPage.passwordInput.type(userData.password);
        Pages.loginPage.submitButton.click();
        Pages.basePage.searchButton.should("have.attr", "aria-hidden", "true").click();
        Pages.basePage.searchInput.type("Apple Juice {enter}");
        Pages.productPage.products.should("have.attr", "cols", "4");
        Pages.productPage.addToBasketButton.click();
        Pages.productPage.basketQuantity.should("have.text", "1");
        Pages.productPage.basketButton.click();
        Pages.basketPage.checkoutButton.click();
        Pages.addressPage.addNewAddressButton.click();
        const addressArray = ["America", "Mark", "12345678", "0000", "Broadway", "New York"];
        for (let i = 0; i < addressArray.length; i++) {
            Pages.addressPage.inputs.eq(i).type(addressArray[i])
        }
        Pages.addressPage.saveButton.click();
        Pages.addressPage.savedAddress.should("be.visible").click({force: true});
        Pages.addressPage.proceedButton.click();
        Pages.deliveryPage.deliveryMethods.should("have.length", 3).eq(0).click({force: true});
        Pages.deliveryPage.proceedButton.should("be.enabled").click();
        Pages.cardPage.addNewCard.eq(0).should("have.text", " Add new card ").click();
        const cardArray = ["Mark", "1111222233334444"]
        for (let i = 0; i < cardArray.length; i++) {
            Pages.cardPage.inputs.eq(i).type(cardArray[i])
        }
        const expiryArray = ["1", "2085"];
        for (let i = 0; i < expiryArray.length; i++) {
            Pages.cardPage.monthYear.eq(i).select(expiryArray[i])
        }
        Pages.cardPage.saveButton.click();
        Pages.cardPage.savedCard.click({force: true});
        Pages.cardPage.proceedButton.click();
        Pages.reviewPage.checkoutButton.click();
        Pages.reviewPage.confirmationText.should("be.visible").should("have.text", "Thank you for your purchase!");
    });
})