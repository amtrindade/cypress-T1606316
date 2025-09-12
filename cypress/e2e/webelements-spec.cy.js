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

    it('Valida Radio Button', () => {
        cy.get('[name="radioGroup1"]').should('have.length', 4)
        cy.get('[name="radioGroup1"]').check('Radio 2').should('be.checked')   
        cy.get('[name="radioGroup1"]').first().check().should('be.checked') 
        cy.get('[name="radioGroup1"]').last().check().should('be.checked')
        cy.get('[name="radioGroup1"]').eq(2).check().should('be.checked')
        cy.get('[name="radioGroup1"]').eq(0).should('not.be.checked')
        cy.get('[name="radioGroup1"]').eq(1).should('not.be.checked')
        cy.get('[name="radioGroup1"]').eq(3).should('not.be.checked')
    })

    it('Valida CheckBox', () => {
        cy.get('[name="chkbox"]').should('have.length', 4)
        cy.get('[name="chkbox"]').check('Check 2').should('be.checked')   
        cy.get('[name="chkbox"]').first().check().should('be.checked') 
        cy.get('[name="chkbox"]').last().check().should('be.checked')
        cy.get('[name="chkbox"]').eq(2).check().should('be.checked')

        cy.get('input[type=checkbox]').check(['Check 3', 'Check 4']).should('be.checked')

        cy.get('input[type=checkbox]').uncheck('Check 2').should('not.be.checked')
        cy.get('input[type=checkbox]').uncheck( {multiple: true} ).should('not.be.checked')
        cy.get('input[type=checkbox]').check( {multiple: true} ).should('be.checked')
        
    })

    it('Valida select single', () => {
        cy.get('[name="dropdownlist"]').select('Item 2').should('have.value', 'item2')  

        cy.get('[name="dropdownlist"] option').should('have.length', 10)
        cy.get('[name="dropdownlist"] option').should('have.length.greaterThan', 9)

        //Forma com o cypress
        cy.get('[name="dropdownlist"] option').eq(0).should('have.text', 'Item 1')
        cy.get('[name="dropdownlist"] option').eq(1).should('have.text', 'Item 2')
        cy.get('[name="dropdownlist"] option').eq(2).should('have.text', 'Item 3')
        cy.get('[name="dropdownlist"] option').eq(3).should('have.text', 'Item 4')
        cy.get('[name="dropdownlist"] option').eq(4).should('have.text', 'Item 5')
        cy.get('[name="dropdownlist"] option').eq(5).should('have.text', 'Item 6')
        cy.get('[name="dropdownlist"] option').eq(6).should('have.text', 'Item 7')
        cy.get('[name="dropdownlist"] option').eq(7).should('have.text', 'Item 8')
        cy.get('[name="dropdownlist"] option').eq(8).should('have.text', 'Item 9')
        cy.get('[name="dropdownlist"] option').eq(9).should('have.text', 'Item 10')

        //Forma com o uso do then() e do jQuery
        cy.get('[name="dropdownlist"] option').then(($options) => {
            const values = []
            $options.each(function() {
                values.push(this.innerText)
            })

            expect(values).to.include.members([
                'Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 
                'Item 6', 'Item 7', 'Item 8', 'Item 9', 'Item 10'])
        })
    }) 

    it.only('Valida select multiple', () => {
        cy.get('[name="multiselectdropdown"]').select(['Item 2', 'Item 5', 'Item 8'])
        //Validar os itens selecionados com o uso do then() e do jQuery
        cy.get('[name="multiselectdropdown"]').then(($select) => {
            const selected = $select.val()
            expect(selected).to.have.length(3)
            expect(selected).to.include.members(['item2', 'item5', 'item8'])
        })
        
        //Validar os itens selecionados com a função invoke()
        cy.get('[name="multiselectdropdown"]').invoke('val').should('deep.equal', ['item2', 'item5', 'item8'])
        
        // Validar o texto das opções selecionadas
        cy.get('[name="multiselectdropdown"] option:selected').then($options => {
            const selectedTexts = [...$options].map(option => option.text);
            expect(selectedTexts).to.deep.equal(['Item 2', 'Item 5', 'Item 8']);
        });
        
        cy.get('[name="multiselectdropdown"]').invoke('val').should('have.length', 3)

    })


})