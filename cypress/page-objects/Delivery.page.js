import BasePage from "./Base.page";

class DeliveryPage extends BasePage{

    constructor() {
        super();
    }

    static get url(){
        return "/delivery-method"
    }

    get deliveryMethods(){
        return cy.get('*.mat-radio-inner-circle')
    }

    get proceedButton(){
        return cy.get('button[aria-label="Proceed to delivery method selection"]')
    }

}

export default DeliveryPage;