import BasePage from '../page-objects/Base.page'
import LoginPage from '../page-objects/auth/Login.page'
import RegisterPage from '../page-objects/auth/Register.page'

export class Pages {
    constructor() {
        this.basePage = new BasePage()
        this.loginPage = new LoginPage()
        this.registerPage = new RegisterPage()
    }
}

module.exports = new Pages()