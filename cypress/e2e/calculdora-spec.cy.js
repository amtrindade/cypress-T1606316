describe('Trabalhando com a calculadora', () => {
  
    beforeEach(() => {
        //Executa antes de cada it
        cy.visit('/desafiosoma.html')
    })

    it('Realiza a soma de dois números', () => {
        cy.get('#number1').type('5')
        cy.get('#number2').type('8')
        cy.get('#somar').click()
        //cy.wait(2000)
        cy.get('#total', {timeout: 10000}).should('have.value', '13')
    })

    it('Valida o texto do botão somar', () => {
        cy.get('#somar').should('have.value', 'Somar')
        
        //Forma alternativa de validar o texto do botão com o comando then()
        cy.get('#somar').then(($btnSomar) => {
            const txtBtnSomar = $btnSomar.val()
            if (txtBtnSomar === 'Somar') {
                cy.log('O texto do botão está correto')
            } else {
                cy.log('O texto do botão está incorreto')
            }
        })
    })
})