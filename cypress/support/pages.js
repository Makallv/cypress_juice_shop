import BasePage from '../page-objects/Base.page'
import LoginPage from '../page-objects/auth/Login.page'
import RegisterPage from '../page-objects/auth/Register.page'
import ForgotPasswordPage from '../page-objects/auth/ForgotPassword.page'
import ProductPage from '../page-objects/Product.page'
import BasketPage from '../page-objects/Basket.page'
import AddressPage from '../page-objects/Address.page'
import CardPage from '../page-objects/Card.page'
import DeliveryPage from "../page-objects/Delivery.page";
import ReviewPage from "../page-objects/Review.page";

export class Pages {
    constructor() {
        this.basePage = new BasePage()
        this.loginPage = new LoginPage()
        this.registerPage = new RegisterPage()
        this.forgotPasswordPage = new ForgotPasswordPage()
        this.productPage = new ProductPage()
        this.basketPage = new BasketPage()
        this.addressPage = new AddressPage()
        this.cardPage = new CardPage()
        this.deliveryPage = new DeliveryPage()
        this.reviewPage = new ReviewPage()
    }
}

module.exports = new Pages()