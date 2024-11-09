import Login from "../pages/login";
describe('LoginTest', () => {
    it('login', () => {
      
        // Visit
        cy.visit('https://dev-a2ierp.oss.net.bd');
        cy.wait(3000);
        
        // Login
        Login.inputUserName('hossain.ahmed@a2i.gov.bd');
        Login.inputPassword('temp1234');
        Login.clickLoginButton();
        
        cy.wait(10000);
    });
});
