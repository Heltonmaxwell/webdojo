describe('testConsultoria',()=>{
    it('Deve solicitar consultoria individual',()=>{
        cy.acessarAmbiente()
        cy.submeterLogin('papito@webdojo.com','katana123')

        //acessar o botão de formulário

        cy.goTo('Formulários','Consultoria')
    })
})