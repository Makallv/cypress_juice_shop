import BasePage from '../Base.page';

class RegisterPage extends BasePage {

    constructor() {
        super();
    }

    static get url(){
        return '/register'
    }

    get emailInput(){
        return cy.get('#emailControl')
    }

    get passwordInput(){
        return cy.get('#passwordControl')
    }

    get repeatPasswordInput(){
        return cy.get('#repeatPasswordControl')
    }

    get securityQuestionInput(){
        return cy.get('[name="securityQuestion"]')
    }

    get securityQuestionOptions(){
        return cy.get("mat-option")
    }

    get securityAnswerInput(){
        return cy.get('#securityAnswerControl')
    }

    get registerButton(){
        return cy.get('button[type="submit"]')
    }

}

export default RegisterPage