///<reference types = "Cypress"/>


export const TeamsPageTests = (DEVurl,QAurl,PRODurl) => {

    describe("Login scenarios", function()
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