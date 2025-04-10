describe('Registration tests', () => {
    // it('Registration successfully', () => {
    //     cy.visit('/login')
    //     cy.getDataTime().then((dateTime) => {
    //         cy.registration('Test User', 'testuser' + dateTime + '@test.com', '123456789');
    //     });
    //     cy.get('.alert-link')
    //         .should('have.text', 'Cadastro realizado com sucesso');
    // })

    it('Registration successfully', () => {
        cy.visit('/login')
        cy.getDataTime().then((dateTime) => {
            cy.registration('Test User', 'testuser' + dateTime + 'invalid_email.com', '123456789');
        });
        cy.get('.alert-link')
            .should('have.text', 'Cadastro realizado com sucesso');
    })
})
