import BasePage from "./Base.page";

class AddressPage extends BasePage{

        constructor() {
            super();
        }

        static get url(){
            return "/address"
        }

        get addNewAddressButton(){
            return cy.get('button[aria-label="Add a new address"]')
        }


        get inputs(){
            return cy.get("*[aria-required='true']")
        }

        get saveButton(){
            return cy.get('button#submitButton')
        }

        get savedAddress(){
            return cy.get('span.mat-radio-outer-circle')
        }

        get proceedButton(){
            return cy.get('button[aria-label="Proceed to payment selection"]')
        }
}

export default AddressPage;