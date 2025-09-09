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

    it('Trabalhando com Boolean', () => {   

        const bool1 = true
        expect(bool1).to.be.true
        
        const bool2 = false
        expect(bool2).to.be.false   
        expect(bool2).to.be.not.true
        expect(bool2).to.be.not.equal(true)
    })

    it('Trabalhando com Float', () => {

        const float = 5.5678456

        expect(float).to.be.equal(5.5678456)
        expect(float).to.be.closeTo(5.56, 0.01)
        expect(float).to.be.closeTo(5.57, 0.01)
        expect(float).to.be.greaterThan(5.5)
        expect(float).to.be.lessThan(5.6)

    })

})