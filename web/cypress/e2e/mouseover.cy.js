describe('Testando o mouse hover', ()=>{
    it('Mostrar texto ao colocar o mouse em cima do @', () =>{
        cy.acessarAmbiente()
        cy.submeterLogin('papito@webdojo.com','katana123')

        cy.get('[data-cy="instagram-link"]').realHover()
        cy.contains('Isso é Mouseover!').should('exist')
    })
})