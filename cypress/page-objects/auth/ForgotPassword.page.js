import BasePage from "../Base.page";

class ForgotPasswordPage extends BasePage{

        constructor() {
            super();
        }

        static get url(){
            return "/forgot-password"
        }

        get emailInput(){
            return cy.get("#email")
        }

        get securityQuestionInput(){
            return cy.get('#securityAnswer')
        }

        get passwordInput(){
            return cy.get("#newPassword")
        }

        get repeatPasswordInput(){
            return cy.get("#newPasswordRepeat")
        }

        get submitButton(){
            return cy.get("button[type='submit']")
        }

        get conformationMessage(){
            return cy.get('.confirmation')
        }

}

export default ForgotPasswordPage;