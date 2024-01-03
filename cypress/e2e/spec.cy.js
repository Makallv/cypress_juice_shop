import Pages from "../support/pages";
import {userData} from "../support/userData";

describe("Forgot Password", () => {
    beforeEach(() => {
      Pages.basePage.visit();
      Pages.basePage.closeWelcomeBanner.click();
    })

    it("Register new user", () => {
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
    })

    it("Login with new user", () => {
        Pages.basePage.accountButton.click();
        Pages.basePage.loginButton.click();
        Pages.loginPage.emailInput.type(userData.email);
        Pages.loginPage.passwordInput.type(userData.password);
        Pages.loginPage.submitButton.click();
        Pages.basePage.accountButton.should("be.visible");
    })
})