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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

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

