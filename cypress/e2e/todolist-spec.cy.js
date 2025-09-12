describe('Todo List tests', () => {
    
    beforeEach(() => {
        //Executa antes de cada it
        cy.visit('https://example.cypress.io/todo#/')
    })

    it('Adiciona um novo todo', () => {
        const todoItem = 'Learn Cypress'

        cy.get('[data-test="new-todo"]').type(`${todoItem}{enter}`)
        cy.get('ul.todo-list').should('contain', todoItem)
        cy.get('ul.todo-list li').should('have.length', 3)

    })

})

