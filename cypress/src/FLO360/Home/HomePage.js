///<reference types = "Cypress"/>


export const HomePageTests = (CompanyName,MorningText,AfternoonText,ProductMaster,ProductOrig,SourcingSupplier,SourcingProds,PurchaseOrders,Production,Inventory,Shipments,deliveryOrders,Finance,reports,Teams) => {

    describe("Homepage tests", function()
    {
        beforeEach(function()
        {
            cy.visit('/') //Run tests in QA environment
        })
        it('Positive test - Company name is displayed on Home page', function()
        {  
            //Verify that the company name is displayed on the Homepage
            cy.SignIn()
            //Assertion - Verify that the company name is displayed on the page
            cy.get('.jss3').should('have.text',CompanyName)
            cy.log('Company name is validated')

        })
        it('Postive test - Welcome message is displayed with username', function()
        {
            //Special command created in support/command.js
            cy.SignIn()
            //Verify that the user that is logged in name is displayed

            //First part of display text
            cy.get(':nth-child(1) > .jss105').should('have.text',MorningText)
            cy.log('Username is checked')

            //Second part of display text
            cy.get(':nth-child(2) > .jss105').should('have.text','Welcome to Flo360')
            cy.log('Welcome message is checked')
        })
        it('Positive test - All modules are visible for the current user',function()
        {
            //Special command created in support/command.js
            cy.SignIn()
            //Verify that the logged in user has access to all modules available
            cy.CheckModules()
            cy.log('All modules are present and checked')
        })
        it('Positive test - User can successfully navigate to each module', function()
        {
            //Special command created in support/command.js
            cy.SignIn()
            
            //Access the Product Master module
            cy.get('[class="MuiGrid-root home-menu-nav-products-master MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-6 MuiGrid-grid-lg-4 MuiGrid-grid-xl-3"]').click()
            //Assertion - Verify that the 'Products dashboard is displayed
            cy.get('[class="MuiPaper-root MuiPaper-elevation0 MuiPaper-rounded"]').should('have.text',ProductMaster)

            //Navigate back to home page
            cy.NavigateHome()
            //Access the Product Origin module
            cy.get('[class="MuiGrid-root home-menu-nav-products-origin MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-6 MuiGrid-grid-lg-4 MuiGrid-grid-xl-3"]').click()
            //Assertion - Verify that the Products Origin Dashboard is displayed
            cy.get('[class="MuiPaper-root MuiPaper-elevation0 MuiPaper-rounded"]').should('have.text',ProductOrig)

            //Navigate back to home page
            cy.NavigateHome()
            //Access the Sourcing Suppliers module
            cy.get('[class="MuiGrid-root home-menu-nav-sourcing-suppliers MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-6 MuiGrid-grid-lg-4 MuiGrid-grid-xl-3"]').click()
            //Assertion - Verify that the Sourcing Suppliers is displayed
            cy.get('[class="MuiPaper-root MuiPaper-elevation0 MuiPaper-rounded"]').should('have.text',SourcingSupplier)

            //Navigate back to home page
            cy.NavigateHome()
            //Access the Sourcing Products module
            cy.get('[class="MuiGrid-root home-menu-nav-sourcing-products MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-6 MuiGrid-grid-lg-4 MuiGrid-grid-xl-3"]').click()
            //Assertion - Verify that the Sourcing Products is displayed
            cy.get('[class="MuiPaper-root MuiPaper-elevation0 MuiPaper-rounded"]').should('have.text',SourcingProds)            

            //Navigate back to home page
            cy.NavigateHome()
            //Access the Purchase orders module
            cy.get('[class="MuiGrid-root home-menu-nav-purchaseOrders MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-6 MuiGrid-grid-lg-4 MuiGrid-grid-xl-3"]').click()
            //Assertion - Verify that the Purchase Order Dashboard is displayed
            cy.get('[class="MuiPaper-root MuiPaper-elevation0 MuiPaper-rounded"]').should('have.text',PurchaseOrders)

            //Navigate back to home page
            cy.NavigateHome()
            //Access the Production module 
            cy.get('[class="MuiGrid-root home-menu-nav-production MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-6 MuiGrid-grid-lg-4 MuiGrid-grid-xl-3"]').click()
            //Assertion - Verify that the Production Dashboard is displayed
            cy.get('[class="MuiPaper-root MuiPaper-elevation0 MuiPaper-rounded"]').should('have.text',Production)

            //Navigate back to home page
            cy.NavigateHome()
            //Access the Inventory module
            cy.get('[class="MuiGrid-root home-menu-nav-inventory MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-6 MuiGrid-grid-lg-4 MuiGrid-grid-xl-3"]').click()
            //Assertion - Verify that the Inventory Dashboard is displayed
            cy.get('[class="MuiPaper-root MuiPaper-elevation0 MuiPaper-rounded"]').should('have.text',Inventory)

            //Navigate back to home page
            cy.NavigateHome()
            //Access the Shipments module
            cy.get('[class="MuiGrid-root home-menu-nav-shipments MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-6 MuiGrid-grid-lg-4 MuiGrid-grid-xl-3"]').click()
            //Assertion - Verify that the Shipments Dashboard is displayed
            cy.get('[class="MuiPaper-root MuiPaper-elevation0 MuiPaper-rounded"]').should('have.text',Shipments)

            //Navigate back to home page
            cy.NavigateHome()
            //Access the Delivery Orders module
            cy.get('[class="MuiGrid-root home-menu-nav-deliveryOrders MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-6 MuiGrid-grid-lg-4 MuiGrid-grid-xl-3"]').click()
            //Assertion - Verify that the Delivery Orders Dashboard is displayed
            cy.get('[class="MuiPaper-root MuiPaper-elevation0 MuiPaper-rounded"]').should('have.text',deliveryOrders)            

            //Navigate back to home page
            cy.NavigateHome()
            //Access the Finance module
            cy.get('[class="MuiGrid-root home-menu-nav-finance MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-6 MuiGrid-grid-lg-4 MuiGrid-grid-xl-3"]').click()
            //Assertion - Verify that the Finance Dashboard is displayed
            cy.get('[class="MuiPaper-root MuiPaper-elevation0 MuiPaper-rounded"]').should('have.text',Finance)  
            
            //Navigate back to home page
            cy.NavigateHome()
            //Access the Report module
            cy.get('[class="MuiGrid-root home-menu-nav-reports MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-6 MuiGrid-grid-lg-4 MuiGrid-grid-xl-3"]').click()
            //Assertion - Verify that the Report Dashboard is displayed
            cy.get('[class="MuiPaper-root MuiPaper-elevation0 MuiPaper-rounded"]').should('have.text',reports) 
            
            //Navigate back to home page
            cy.NavigateHome()
            //Access the Teams module
            cy.get('[class="MuiGrid-root home-menu-nav-team MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-6 MuiGrid-grid-lg-4 MuiGrid-grid-xl-3"]').click()
            //Assertion - Verify that the Teams page is displayed
            cy.get('[class="MuiPaper-root MuiPaper-elevation0 MuiPaper-rounded"]').should('have.text',Teams)             

        })
        it('User can view company detail by clicking company name', function()
        {
            //Continue here!!!!!!!!!!
            cy.SignIn()
            //Verify that the user can access all company related details when clicking on the company name
            cy.get('.jss3').click({force:true})
            //Assertion - Verify that user can see all modules for a company
            cy.get('[class="MuiTabs-flexContainer MuiTabs-flexContainerVertical"]')
            .should('have.text','Details')
            .should('have.text','Hubs')

        })

        it.only('Positive test - User can access the Settings page', function()
        {   cy.SignIn()
            //Verify that the user can successfully navigate to the settings page
            //cy.get('.MuiButtonBase-root noselect').click()
            //cy.get('a.noselect > .material-icons > svg').click()
           //cy.get('[class="MuiButtonBase-root noselect header-content-settings-icon"]').click()
            //cy.get('button.noselect > .MuiSvgIcon-root').click({force:true})
           //Assertion - Correct page is displayed after clicking the settings button
           const now = new Date(2017, 3, 14).getTime() // April 14, 2017 timestamp
           cy.clock(now)
           cy.get('#date').contains('2017-04-14')
           cy.log()
        })
    })
    }