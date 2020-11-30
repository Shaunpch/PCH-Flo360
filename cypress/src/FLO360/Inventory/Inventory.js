///<reference types = "Cypress"/>


export const InventoryPageTests = (DEVurl,QAurl,PRODurl) => {

    describe("Inventory scenarios", function()
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