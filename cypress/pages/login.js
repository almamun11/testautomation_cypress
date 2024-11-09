class Login {
    userName = 'input[id="username"]';
    password = 'input[id="password"]';
    loginButton = 'input[id="kc-login"]';

    inputUserName(userName) {
        cy.get(this.userName).type(userName);
    }

    inputPassword(password) {
        cy.get(this.password).type(password);
    }

    clickLoginButton() {
        cy.get(this.loginButton).click();
    }
}

module.exports = new Login();