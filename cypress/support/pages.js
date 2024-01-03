import BasePage from '../page-objects/Base.page'
import LoginPage from '../page-objects/auth/Login.page'
import RegisterPage from '../page-objects/auth/Register.page'
import ForgotPasswordPage from '../page-objects/auth/ForgotPassword.page'

export class Pages {
    constructor() {
        this.basePage = new BasePage()
        this.loginPage = new LoginPage()
        this.registerPage = new RegisterPage()
        this.forgotPasswordPage = new ForgotPasswordPage()
    }
}

module.exports = new Pages()