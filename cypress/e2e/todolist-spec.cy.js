describe('Todo List tests', () => {

    const todoItem = 'Learn Cypress'
    
    beforeEach(() => {
        cy.visit('https://example.cypress.io/todo#/')
    })

    it('Adiciona um novo todo', () => {
        
        cy.get('[data-test="new-todo"]').type(`${todoItem}{enter}`)
        cy.get('ul.todo-list').should('contain', todoItem)
        cy.get('ul.todo-list li').should('have.length', 3)

    })

    describe('Validar filtro do completed', () => {
        beforeEach(() => {
            cy.get('[data-test="new-todo"]').type(`${todoItem}{enter}`)
        })

        it('Marca um todo como completo e realiza o filtro', () => {
            cy.get('ul.todo-list li').contains(todoItem).parent().find('input[type="checkbox"]').check()
            cy.get('.filters').contains('Completed').click()
            cy.get('ul.todo-list li').should('have.length', 1)           
            cy.get('ul.todo-list li').first().should('contain', todoItem)
        })

    })

    describe('Validar que a tarefa concluída for excluída', () => {
        beforeEach(() => {
            cy.get('[data-test="new-todo"]').type(`${todoItem}{enter}`)
            cy.get('ul.todo-list li').contains(todoItem).parent().find('input[type="checkbox"]').check()
            cy.get('.filters').contains('Completed').click()
        })

        it('Exclui a tarefa concluída', () => {
            cy.get('ul.todo-list li').first().find('button.destroy').invoke('show').click()
            cy.get('ul.todo-list li').should('have.length', 0)  
            cy.get('.filters').contains('All').click()
            cy.get('ul.todo-list li').should('have.length', 2)
        })

    })

})