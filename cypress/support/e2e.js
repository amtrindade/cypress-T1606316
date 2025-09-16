// Import commands.js using ES2015 syntax:
import './commands'

//Ordenação dos selectors a partir do inspect do Cypress
Cypress.SelectorPlayground.defaults({
    selectorPriority: ['data-cy', 'id', 'class', 'tag', 'attributes', 'nth-child']
})