//================== Espaço reservado para os testes ===================

describe('Login', ()=>{
  it('Realizando login de conta.',()=>{
    
    cy.submeterLogin('papito@webdojo.com','katana123')
    
    cy.get('[data-cy="user-name"]')
      .should('be.visible') // O comando should indica a espera de um resultado, nesse caso, que o componente esteja visível.
      .and('have.text','Fernando Papito') // ja nesse caso, espera que o componente possua o valor seguinte

    cy.get('[data-cy="welcome-message"]')
      .should('be.visible')
      .and('have.text','Olá QA, esse é o seu Dojo para aprender Automação de Testes.')
  })

  it('Não pode entrar com senha incorreta',()=>{
    
    cy.submeterLogin('papito@webdojo.com','12345')

    cy.contains('Acesso negado! Tente novamente.')
      .should('be.visible')
    
  })

  it('Não pode entrar com email não cadastrado',()=>{

    cy.submeterLogin('eotaldoanao@webdojo.com','katana123')

    cy.contains('Acesso negado! Tente novamente.')
      .should('be.visible')
    
  })
})

//============ Espaço reservado para as funções ===============================

