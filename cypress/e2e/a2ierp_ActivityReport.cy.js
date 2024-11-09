import Login from "../pages/login";

describe('LoginTest', () => {
  it('login and create activity report', () => {
    // Visit the page
    cy.visit('https://dev-a2ierp.oss.net.bd');
    cy.wait(3000);

    // Use Login class to log in
    Login.inputUserName('hossain.ahmed@a2i.gov.bd');
    Login.inputPassword('temp1234');
    Login.clickLoginButton();
    cy.wait(5000);

    // My Details
    cy.get('div>div>div>span').contains('My Details').click()
    
    //Activity Report
    cy.get('a[href="/salary-documents/monthly-activity-report"]').click()
    cy.get('mat-datepicker-toggle>button>span[class="mat-mdc-button-touch-target"]').click()
    cy.get('td>button>span').contains('2024').click()
    cy.get('td>button>span').contains('DEC').click()
    cy.get('div>button>span[class="mdc-button__label"]').contains('Add New').click()
    
    //Activity Report Create
    cy.get('input[placeholder="Title-1"]').type('December Month Activity Report') //Add title
    cy.get('input[placeholder="Duration-1"]').type('10') //Add duration
    cy.get('textarea[placeholder="Description-1"]').type('December Month Activity ReportDecember Month Activity ReportDecember Month Activity ReportDecember Month Activity Report') //Add details description
    
    //Add more
    cy.get('div>button').contains('add').click()
    cy.get('input[placeholder="Title-2"]').type('December Month Activity Report2') //Add title
    cy.get('input[placeholder="Duration-2"]').type('10') //Add duration
    cy.get('textarea[placeholder="Description-2"]').type('December Month Activity ReportDecember Month Activity ReportDecember Month Activity ReportDecember Month Activity Report') //Add details description
    cy.get('div>button>span[class="mdc-button__label"]').contains('Submit').click()
    cy.xpath ('//*[@id="sidenav-container"]/app-monthly-activity-report/div/app-monthly-activity-reprt-list-shell/app-monthly-activity-reprt-list/div[2]/div/mat-table/mat-row/mat-cell[6]/div/section/button[1]/span[4]').click()

    

  })
})
