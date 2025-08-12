describe('Abrindo novos links', ()=>{

    beforeEach(() =>{
        cy.acessarAmbiente()
        cy.submeterLogin('papito@webdojo.com','katana123')
    })


    it('Testando links Ahref', ()=> {

        cy.get('[data-cy="instagram-link"]')
            .should('have.attr','target','_blank')
            .and('have.attr','href','https://www.instagram.com/qapapito')

    })

    it('Acessando link sem abrir uma nova página',()=>{
        cy.goTo('Formulários','Consultoria')
        
        cy.contains('a','termos de uso')
            .invoke('removeAttr','target','_blank')
            .click()
    })
})