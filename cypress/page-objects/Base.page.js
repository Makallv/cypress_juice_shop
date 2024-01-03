class BasePage{
    get url(){
        return "/"
    }

    visit(){
        cy.visit(this.url)
    }

    get accountButton(){
        return cy.get("button[id='navbarAccount']")
    }

    get logoutButton(){
        return cy.get("button[id='navbarLogoutButton']")
    }

    get loginButton(){
        return cy.get("button[id='navbarLoginButton']")
    }

    get closeWelcomeBanner(){
        return cy.get("[aria-label='Close Welcome Banner']")
    }
}

export default BasePage