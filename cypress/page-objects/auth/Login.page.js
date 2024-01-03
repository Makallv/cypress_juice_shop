import BasePage from "../Base.page";

class LoginPage extends BasePage{

        constructor() {
            super();
        }

        static get url(){
            return "/login"
        }

        get emailInput(){
            return cy.get("#email")
        }

        get passwordInput(){
            return cy.get("#password")
        }

        get submitButton(){
            return cy.get("button[type='submit']")
        }

        get registerLink(){
            return cy.get("a[routerlink='/register']")
        }

        get forgotPasswordLink(){
            return cy.get("a[routerlink='/forgot-password']")
        }
}

export default LoginPage