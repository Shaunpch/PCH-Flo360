///<reference types = "Cypress"/>


export const FinancePageTests = (DEVurl,QAurl,PRODurl) => {

    describe("Finance Scenarios", function()
    {
        before(function()
        {
            
            cy.visit(DEVurl) //Run tests in Dev environment
            //cy.visit(QAurl) //Run tests in QA environment
            //cy.visit(PRODurl) //Run tests in PROD
        })
        it('testcase name', function()
        { 
        })
    
    })
    }