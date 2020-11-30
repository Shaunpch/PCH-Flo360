// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add("login", () => {
    cy.request({
      method: "POST",
      url: `https://login.microsoftonline.com/${Cypress.config("tenantId")}/oauth2/token`,
      form: true,
      body: {
        grant_type: "client_credentials",
        client_id: Cypress.config("clientId"),
        client_secret: Cypress.config("clientSecret"),
        resource: Cypress.config("clientId"),
      },
    }).then((response) => {
      const ADALToken = response.body.access_token;
      const expiresOn = response.body.expires_on;
  
      localStorage.setItem("adal.token.keys", `${Cypress.config("clientId")}|`);
      localStorage.setItem(
        `adal.access.token.key${Cypress.config("clientId")}`,
        ADALToken
      );
      localStorage.setItem(
        `adal.expiration.key${Cypress.config("clientId")}`,
        expiresOn
      );
      localStorage.setItem("adal.idtoken", ADALToken);
    });
  });

  //Login and navigate to home page
  Cypress.Commands.add('SignIn', function(){
    cy.get('.MuiButtonBase-root').click()
    cy.wait(5000)
    //cy.get('#headerTopToolBar > .MuiIconButton-root > .MuiIconButton-label > .material-icons').click()
    //cy.get(':nth-child(1) > .MuiListItemText-root > .MuiTypography-root').click()
    cy.get('[class="MuiButtonBase-root MuiIconButton-root MuiHeader-menuButton header-hamburger-icon"]').click({force:true})
    cy.get('[class="MuiTypography-root MuiListItemText-primary MuiTypography-body1 MuiTypography-noWrap MuiTypography-displayBlock"]').contains('Home').click({force:true})
  })
  //Check if all modules are present for current user
  Cypress.Commands.add('CheckModules',function()
  {
    cy.get(':nth-child(2) > .MuiGrid-container').should('contain.text','Sourcing Suppliers')
    .should('contain.text','Sourcing Products')
    .should('contain.text','Purchase Orders')
    .should('contain.text','Production')
    .should('contain.text','Inventory')
    .should('contain.text','Shipments')
    .should('contain.text','Delivery Orders')
    .should('contain.text','Finance')
    .should('contain.text','Reports')
    .should('contain.text','Team')
  })

  Cypress.Commands.add('NavigateHome',function()
  {
      //Navigate back to home page
      cy.get('[class="MuiButtonBase-root MuiIconButton-root MuiHeader-menuButton header-hamburger-icon"]').click()
      cy.get('[class="MuiTypography-root MuiListItemText-primary MuiTypography-body1 MuiTypography-noWrap MuiTypography-displayBlock"]').contains('Home').click()
  })
