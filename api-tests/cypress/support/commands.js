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

Cypress.Commands.add('createAdministratorUserAndLogin', (n) => {

        const email = 'testuser' + dateTime + '@test.com';
        const password = '123456789';
        cy.request({

            method: 'POST',
            url: '/usuarios',
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: {
                nome: 'Test User Admin',
                email: email,
                password: password,
                administrador: 'true',
            },
        }).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body).to.have.property('message', 'Cadastro realizado com sucesso');

        });

        cy.request({
            method: 'POST',
            url: '/login',
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: {
                email: email,
                password: password,
            },
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('message', 'Login realizado com sucesso');
            const token = response.body.authorization;
            expect(token).to.not.be.empty;
            cy.log('Token: ' + token);
            return token;
        });
})
