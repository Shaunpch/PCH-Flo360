///<reference types = "Cypress"/>


export const PurchaseOrdersPageTests = (DEVurl,QAurl,PRODurl) => {

    describe("Purchase orders scenarios", function()
    {
        before(function()
        {
            
            cy.visit(DEVurl) //Run tests in Dev environment
            //cy.visit(QAurl) //Run tests in QA environment
            //cy.visit(PRODurl) //Run tests in PROD
        })
        it('Testcase name', function()
        { 
        })
    
    })
    }