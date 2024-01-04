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

    it("Login with new user and logout", () => {
        Pages.basePage.accountButton.click();
        Pages.basePage.loginButton.click();
        Pages.loginPage.emailInput.type(userData.email);
        Pages.loginPage.passwordInput.type(userData.password);
        Pages.loginPage.submitButton.click();
        Pages.basePage.accountButton.should("be.visible");
        Pages.basePage.accountButton.click();
        Pages.basePage.logoutButton.click();
    })

    it("Forgot password", () => {
        Pages.basePage.accountButton.click();
        Pages.basePage.loginButton.click();
        Pages.loginPage.forgotPasswordLink.click({force: true});
        Pages.forgotPasswordPage.emailInput.type(userData.email);
        Pages.forgotPasswordPage.securityQuestionInput.should("be.enabled");
        Pages.forgotPasswordPage.securityQuestionInput.type(userData.word);
        Pages.forgotPasswordPage.passwordInput.type(userData.newPassword)
        Pages.forgotPasswordPage.repeatPasswordInput.type(userData.newPassword)
        Pages.forgotPasswordPage.submitButton.click();
        Pages.forgotPasswordPage.conformationMessage.should("be.visible");
        Pages.forgotPasswordPage.conformationMessage.should("have.text", " Your password was successfully changed. ");
    })
})