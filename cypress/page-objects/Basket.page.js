import BasePage from "./Base.page";

class BasketPage extends BasePage{

    constructor() {
        super();
    }

    static get url(){
        return "/basket"
    }

    get checkoutButton(){
        return cy.get('button#checkoutButton')
    }

}

export default BasketPage;