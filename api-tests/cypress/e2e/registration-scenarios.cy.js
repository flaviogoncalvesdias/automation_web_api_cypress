let dateTime = '';
beforeEach(() => {
    const getDateTime = () => {
        return new Date().toISOString().replace(/[-:.TZ]/g, '');
    };
    dateTime = getDateTime();
});
describe('User registration - api', () => {
    it('Post - Registration admin user - successfully', () => {

        cy.request({

            method: 'POST',
            url: '/usuarios',
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: {
                nome: 'Test User Admin',
                email: 'testuser' + dateTime
                    + '@test.com',
                password: '123456789',
                administrador: 'true',
            },
            log: true,
        }).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body).to.have.property('message', 'Cadastro realizado com sucesso');

        });

    })

    it('Post - Registration admin user - 400', () => {

        cy.request({

            method: 'POST',
            url: '/usuarios',
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: {
                nome: 'Test User Admin',
                email: '',
                password: '123456789',
                administrador: 'true',
            },
            failOnStatusCode: false,
        }).then((response) => {
            cy.log('Response Status: ' + response.status);
            cy.log('Response Body: ', response.body);
            expect(response.status).to.eq(400);
            expect(response.body).to.have.property('email', 'email não pode ficar em branco');

        });

    })
})

describe('User registration - api', () => {
    it('Registration common user - successfully', () => {

        cy.request({

            method: 'POST',
            url: '/usuarios',
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: {
                nome: 'Test User Admin',
                email: 'commonuser-test' + dateTime
                    + '@test.com',
                password: '123456789',
                administrador: 'false',
            },
            log: true,
        }).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body).to.have.property('message', 'Cadastro realizado com sucesso');

        });

    })

    it('Post - Registration common user - 400', () => {

        cy.request({

            method: 'POST',
            url: '/usuarios',
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: {
                nome: 'Test User Admin',
                email: '',
                password: '123456789',
                administrador: 'false',
            },
            failOnStatusCode: false,
        }).then((response) => {
            cy.log('Response Status: ' + response.status);
            cy.log('Response Body: ', response.body);
            expect(response.status).to.eq(400);
            expect(response.body).to.have.property('email', 'email não pode ficar em branco');

        });

    })
})


