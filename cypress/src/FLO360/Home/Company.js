///<reference types = "Cypress"/>


export const CompanyTests = (CompanyName,MorningText,AfternoonText,ProductMaster,ProductOrig,SourcingSupplier,SourcingProds,PurchaseOrders,Production,Inventory,Shipments,deliveryOrders,Finance,reports,Teams) => {

    describe("TestSuiteName tests", function()
    {
        beforeEach(function()
        {
            cy.visit('/') //Run tests in QA environment
        })
        it('Testcasename', function()
        { 

        })
    })
}