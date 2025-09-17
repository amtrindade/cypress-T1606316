import loc from '../support/locators'

Cypress.Commands.add('login', (environment, user, pass) => {
    cy.get(loc.LOGIN.TF_WORKSPACE).type(environment)
    cy.get(loc.LOGIN.TF_USER).type(user)
    cy.get(loc.LOGIN.TF_PASSWORD).type(pass)
    cy.get(loc.LOGIN.BTN_SUBMIT).click()  
 })

 Cypress.Commands.add('search', (description) => {
    cy.get(loc.LIST_LOCATION.TF_SEARCH).type(description)
    cy.get(loc.LIST_LOCATION.BTN_SEARCH).click() 
})

