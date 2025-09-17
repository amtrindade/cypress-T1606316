import loc from '../support/locators'

describe('Testes referentes ao cadastro de locais do Center uMov.me', () => {
    const corporateName = 'Local Cypress'
    let description
 
    beforeEach(() => {
        description = `Local Cypress ${Math.floor(Math.random() * 100000000)}`

        cy.visit(Cypress.env('urlbase'))
        cy.login(Cypress.env('environment'), Cypress.env('user'), Cypress.env('password'))
        cy.get(loc.MENU.LOCATIONS).click()
    })

    it('Realizar a inserção de locais', () => {
        cy.get(loc.LIST_LOCATION.BTN_ADD).click()
        cy.get(loc.ADD_LOCATION.TF_DESCRIPTION).type(description)
        cy.get(loc.ADD_LOCATION.TF_CORPORTATE_NAME).type(corporateName)
        cy.get(loc.ADD_LOCATION.BTN_SAVE).click()

        cy.search(description)
        
        cy.get(loc.LIST_LOCATION.LINE_RESULT).should('have.text', description)

    })

    describe('Realizar a edição de um local', () => {

        beforeEach(() => {
            cy.get(loc.LIST_LOCATION.BTN_ADD).click()
            cy.get(loc.ADD_LOCATION.TF_DESCRIPTION).type(description)
            cy.get(loc.ADD_LOCATION.TF_CORPORTATE_NAME).type(corporateName)
            cy.get(loc.ADD_LOCATION.BTN_SAVE).click()

            cy.search(description)
        })

        it('Editar um local cadastrado', () => {
            const newDescription = `${description} - edit`

            cy.get(loc.LIST_LOCATION.BTN_EDIT).click()
            cy.get(loc.ADD_LOCATION.TF_DESCRIPTION).clear().type(newDescription)
            cy.get(loc.ADD_LOCATION.BTN_SAVE).click()

            cy.search(newDescription)

            cy.get(loc.LIST_LOCATION.LINE_RESULT).should('have.text', newDescription)

        })  

        it('Desativar um local cadastrado', () => {
            cy.get(loc.LIST_LOCATION.BTN_EDIT).click()
            cy.get(loc.ADD_LOCATION.CHK_ACTIVE).uncheck()
            cy.get(loc.ADD_LOCATION.BTN_SAVE).click()

            cy.search(description)
            
            cy.get(loc.LIST_LOCATION.BODY).should('contain.text', 'Nothing found to display.')           
        })

    })




})