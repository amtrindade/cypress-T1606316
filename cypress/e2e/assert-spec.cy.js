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

    it('Trabalhando com Arrays', () => {

        const arrInt = [1, 2 , 3, 4, 5]
        const arrStr = ['um', 'dois', 'tres', 'quatro', 'cinco']

        expect(arrInt).to.be.an('array')
        expect(arrInt).to.have.length(5)
        expect(arrInt).to.include.members([1, 3])
        expect(arrInt).to.not.include.members([6, 7])
        expect(arrInt[3]).to.be.equal(4)

        expect(arrStr).to.be.an('array')
        expect(arrStr).to.have.length(5)
        expect(arrStr).to.include.members(['um', 'tres'])
        expect(arrStr).to.not.include.members(['seis', 'sete'])
        expect(arrStr[1]).to.be.equal('dois')

    })

    it('Trabalhando com Objetos', () => {

        const framework01 = {
            nome: 'Cypress',
            versao: 15.0,
            empresa: 'Cypress.io',
            site: 'https://www.cypress.io',
            linguagem: 'JavaScript'
        }

        expect(framework01).to.be.an('object')
        expect(framework01).to.have.property('nome')
        expect(framework01).to.have.property('nome', 'Cypress')
        expect(framework01).to.have.property('versao', 15.0)

        const framework02 = {
            nome: 'Cypress',
            versao: 15.0,
            empresa: 'Cypress.io',
            site: 'https://www.cypress.io',
            linguagem: 'JavaScript'
        }

        expect(framework01).to.be.deep.equal(framework02)        

    })

})