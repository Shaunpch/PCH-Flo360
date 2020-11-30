///<reference types = "Cypress"/>


export const ReportsPageTests = (DEVurl,QAurl,PRODurl) => {

    describe("Reports scenarios", function()
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