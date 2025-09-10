describe('Trabalhando com elementos da web', () => {
  
    beforeEach(() => {
        //Executa antes de cada it
        cy.visit('/elementsweb.html')
    })

    it('Valida o título da página', () => {
        //Captura o título da página e compara com o valor esperado.
        cy.title().should('to.be.equal', 'WebElements Test Page Lab')
        cy.url().should('include', 'elementsweb')
    })

    it('Valida o nome descrito no TextField', () => {

        //1. Mapeia o elemento
        //2. Realiza a ação
        //3. Verifica o resultado esperado
        cy.get('[name="txtbox1"]').type('Hello world').should('have.value', 'Hello world')
    })

    it('Valida o componente Label', () => {
        cy.get('[name="seltestfrm"] > :nth-child(1) > .text-muted')
            .should('have.text', 'TextField:')
            .and('be.visible')
    })

    it('Valida TextField com atributo disabled', () => {
        cy.get('[name="txtbox1"]')
            .should('be.enabled')
            .type('Testando')
            .should('have.value', 'Testando')

        cy.get('[name="txtbox2"]')
            .should('be.disabled')
            .type('Testando', {force: true})
            .should('have.value', 'Testando') 
    })
})