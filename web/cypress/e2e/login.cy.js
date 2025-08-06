describe('Login', ()=>{
  it('Realizando login de conta.',()=>{
    cy.viewport(1440,900)
    cy.visit('http://localhost:3000')

    //primeiro teste

    cy.get('#email').type('papito@webdojo.com')
    cy.get('#password').type('katana123')
    cy.contains('button','Entrar').click()
    
    cy.get('[data-cy="user-name"]')
      .should('be.visible') // O comando should indica a espera de um resultado, nesse caso, que o componente esteja visível.
      .and('have.text','Fernando Papito') // ja nesse caso, espera que o componente possua o valor seguinte

    cy.get('[data-cy="welcome-message"]')
      .should('be.visible')
      .and('have.text','Olá QA, esse é o seu Dojo para aprender Automação de Testes.')
  })
})