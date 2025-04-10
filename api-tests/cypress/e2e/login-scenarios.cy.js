let dateTime = '';
beforeEach(() => {
    const getDateTime = () => {
        return new Date().toISOString().replace(/[-:.TZ]/g, '');
    };
    dateTime = getDateTime();
});
describe('Login API', () => {
    it('create and login with valid credentials', () => {
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

        });
    });
});

