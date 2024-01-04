import BasePage from "./Base.page";

class ProductPage extends BasePage{

    constructor() {
        super();
    }

    static get url(){
        return "/search"
    }

    get products(){
        return cy.get('mat-grid-list.mat-grid-list');
    }

    get addToBasketButton(){
        return cy.get('button[aria-label="Add to Basket"]')
    }

    get basketButton(){
        return cy.get('button[routerlink="/basket"]')
    }

}

export default ProductPage;