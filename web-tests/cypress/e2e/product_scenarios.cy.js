describe('Product tests', () => {

    it('Product registration with Admin user - successfully', () => {
        cy.visit('/login')
        cy.getDataTime().then((dateTime) => {
            const productName = 'Robo aspirador Xiaomi versão:Xi' + dateTime;
            cy.registrationAdmin('Test User', 'testuser' + dateTime + '@test.com', '123456789');
            cy.productRegistration(productName, '1999', 'Robo aspirador', '100');
            cy.get('.jumbotron')
                .should('contain.text', productName);
        });

    })

    it('Product registration, search and add on card - successfully', () => {
        cy.visit('/login')
        cy.getDataTime().then((dateTime) => {
            const productName = 'Robo aspirador Xiaomi versão:Xi' + dateTime;
            cy.registrationAdmin('Test User', 'testuser' + dateTime + '@test.com', '123456789');

            cy.productRegistration(productName, '1999', 'Robo aspirador', '100');
            cy.get('.jumbotron')
                .should('contain.text', productName);
            cy.get('[data-testid="logout"]')
                .click();

            cy.registrationCommonUser('Test Common User', 'testcommonuser' + dateTime + '@test.com', '123456789');

            cy.get('[data-testid="pesquisar"]')
                .type(productName);

            cy.get('[data-testid="botaoPesquisar"]')
                .click();

            cy.get('.card-body')
                .should('contain.text', productName);

            cy.get('[data-testid="adicionarNaLista"]')
                .click();
            cy.get("a[data-testid='lista-de-compras']")
                .click()

            cy.get('.card-body')
                .should('contain.text', productName);
        });
    })

})
