import BasePage from "./Base.page";

class ReviewPage extends BasePage{

        constructor() {
            super();
        }

        static get url(){
            return "/order-summary"
        }

       get checkoutButton(){
            return cy.get('button#checkoutButton')
        }

        get confirmationText() {
            return cy.get('h1.confirmation')
        }
}

export default ReviewPage;