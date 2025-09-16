// Import commands.js using ES2015 syntax:
import './commands'

//Ordenação dos selectors a partir do inspect do Cypress
Cypress.ElementSelector.defaults({
    selectorPriority: ['data-test', 'id', 'class', 'tag', 'attributes', 'nth-child']
})