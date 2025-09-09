describe('Trabalhando com asserts', () => {

    it('Trabahando com Integer', () => {
        
        const num = 6

        expect(num).to.be.equal(6)
        expect(num).to.be.not.equal(5)

        expect(num).to.be.greaterThan(5)
        expect(num).to.be.lessThan(7)
    
    }) 

    it('Trabalhando com String', () => {
        
        const str = 'Automação de testes com Cypress'

        expect(str).to.be.equal('Automação de testes com Cypress')
        expect(str).to.be.not.equal('Cypress')

        expect(str).to.have.be.length(31)
        expect(str).to.be.contains('Cypress')
        expect(str).to.be.includes('Cypress')

        //expressão regular
        expect(str).to.match(/Cypress/)
        expect(str).to.match(/cypress/i)    
    })
})