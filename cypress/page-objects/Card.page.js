import BasePage from "./Base.page";

class CardPage extends BasePage {

    constructor() {
        super();
    }

    static get url() {
        return "/payment/shop"
    }

    get addNewCard() {
        return cy.get('mat-panel-title.mat-expansion-panel-header-title')
    }

    get inputs() {
        return cy.get('input.mat-input-element[aria-required=true].mat-form-field-autofill-control.cdk-text-field-autofill-monitored')
    }

    get saveButton() {
        return cy.get('button#submitButton')
    }

    get monthYear() {
        return cy.get('select[aria-required=true]')
    }

    get savedCard() {
        return cy.get('*.mat-radio-outer-circle')
    }

    get proceedButton() {
        return cy.get('button[aria-label="Proceed to review"]')
    }


}

export default CardPage;