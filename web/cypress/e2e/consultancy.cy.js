describe('testConsultoria', () => {
    it('Deve solicitar consultoria individual', () => {
        cy.acessarAmbiente()
        cy.submeterLogin('papito@webdojo.com', 'katana123')

        //acessar o botão de formulário

        cy.goTo('Formulários', 'Consultoria')

        cy.get('input[placeholder="Digite seu nome completo"]').type('Helton Maxwell Lima da Silva')
        cy.get('input[placeholder="Digite seu email"]').type('Heltonmaxwell.info@gmail.com')
        cy.get('input[placeholder="(00) 00000-0000"]').type('85991074241')
            .should('have.value', '(85) 99107-4241')
        cy.get('#consultancyType').select('In Company')

        cy.contains('label', 'Pessoa Jurídica')
            .find('input')
            .check()

        cy.get('#document')
            .type('76910170000175')
            .should('have.value', '76.910.170/0001-75')

        //Serão 5 checkbox, necessário uma função para executar os 5 sem repetição.

        const canaisComunicacao = [
            'Instagram',
            'LinkedIn',
            'Udemy',
            'YouTube',
            'Indicação de Amigo'
        ]

        canaisComunicacao.forEach((canal) => {
            cy.contains('label', canal)
                .find('input')
                .check()
                .should('be.checked')
        })
        // Importando arquivo PDF.
        cy.get('input[type="file"]')
            .selectFile('./cypress/fixtures/Lorem-Ipsum.pdf', { force: true })

        // Interagindo com Textarea
        cy.get('textarea[id="details"]')
            .type('Preciso de instruções sólidas sobre o manuseio de APIs utilizando a tecnologia API REST.')

        //
    })
})