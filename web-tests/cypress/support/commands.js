// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('getDataTime', () => {
    const currentDateTime = new Date();
    const date = currentDateTime.getDate();
    const month = currentDateTime.getMonth() + 1;
    const year = currentDateTime.getFullYear();
    const hours = currentDateTime.getHours();
    const minutes = currentDateTime.getMinutes();
    const seconds = currentDateTime.getSeconds();
    const dateTime = `_${date}_${month}_${year}_${hours}_${minutes}_${seconds}`;
    Cypress.env("dateTime", dateTime);
    cy.log("DataTime: " + dateTime);
    return cy.wrap(dateTime);
})

Cypress.Commands.add('registration', (name,email, password) => {
        cy.get("a[data-testid='cadastrar']")
            .should('have.text', 'Cadastre-se')
            .click();

        cy.get('[data-testid="nome"]')
            .type(name);
        cy.get('[data-testid="email"]')
            .type(email);

        cy.get('[data-testid="password"]')
            .type(password);

        cy.get("button[data-testid='cadastrar']")
            .should('have.text', 'Cadastrar')
            .click();

        cy.get('[data-testid="checkbox"]')
            .check();
})
