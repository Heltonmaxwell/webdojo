describe('IFrame Em páginas',()=>{

    beforeEach(() =>{
        cy.acessarAmbiente()
        cy.submeterLogin('papito@webdojo.com','katana123')
        cy.goTo('Video','Video')
    })

    it('Lidando com elementos em um video', () => {
        cy.get('iframe[title="Video Player"]')     //   Recebe o elemento por um atributo
            .should('exist')                       //   Checa se o elemento existe
            .its('0.contentDocument.body')         //   Acessa o conteúdo do iFrame
            .then(cy.wrap)                         //   Recebe o valor e coloca em um objeto Cypress
            .as('iFramePlayer')                    //   Salva o valor acessado em um Objeto

        cy.get('@iFramePlayer')
            .find('.play-button')
            .click()
        
        cy.get('@iFramePlayer')
            .find('.pause-button')
            .should('be.visible')
            .click()
    })
})