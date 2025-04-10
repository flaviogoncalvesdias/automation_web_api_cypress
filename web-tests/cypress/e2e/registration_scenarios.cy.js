describe('Registration tests', () => {
    it('Registration common user - successfully', () => {
        cy.visit('/login')
        cy.getDataTime().then((dateTime) => {
            cy.registrationCommonUser('Test User', 'testuser' + dateTime + '@test.com', '123456789');
        });
        cy.get('.alert-link')
            .should('have.text', 'Cadastro realizado com sucesso');
    })

    it('Registration Admin user - successfully', () => {
        cy.visit('/login')
        cy.getDataTime().then((dateTime) => {
            cy.registrationAdmin('Test User', 'testuser' + dateTime + '@test.com', '123456789');
        });
        cy.get('.alert-link')
            .should('have.text', 'Cadastro realizado com sucesso');
    })
})
