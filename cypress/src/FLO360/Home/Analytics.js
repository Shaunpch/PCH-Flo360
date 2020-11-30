///<reference types = "Cypress"/>


export const AnalyticsTests = (CompanyName) => {

    describe("Analytics tests", function()
    {
        beforeEach(function()
        {
            cy.visit('/') //Run tests in QA environment
        })
        it('Analytics - User can navigate to Analytics page', function()
        { 
            cy.SignIn()
            //Select the analytics module
            cy.get('[class="MuiButtonBase-root noselect header-content-settings-icon"]').click()
            cy.get('[class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6 MuiGrid-grid-md-4 MuiGrid-grid-lg-3 MuiGrid-grid-xl-2"]').contains('Analytics').click()

            //Assertion - Verify that the analytics page is loaded
            cy.get('.MuiBreadcrumbs-ol').should('have.text','Home>Analytics')
        })
    })
}