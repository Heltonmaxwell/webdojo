// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import 'cypress-real-events'

Cypress.Commands.add('acessarAmbiente',()=>{ //Função construida para acessar o ambiente do programa
    cy.visit('http://localhost:3000')
    cy.viewport(1440,900)
})

Cypress.Commands.add('submeterLogin',(user,password)=>{ // Função para automatizar a entrada da conta do usuário

  cy.get('#email').type(user)
  cy.get('#password').type(password)
  cy.contains('button','Entrar').click()
})

Cypress.Commands.add('goTo',(button, namePage)=>{ //Função para acessar páginas.
    cy.contains('button',button)
        .should('be.visible')
        .click()
    
    cy.contains('h1',namePage)
        .should('be.visible')
})