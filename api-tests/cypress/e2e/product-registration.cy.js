let dateTime = '';
let token = '';
let email = '';
let password = '';
beforeEach(() => {
    const getDateTime = () => {
        return new Date().toISOString().replace(/[-:.TZ]/g, '');
    };
    dateTime = getDateTime();
    email = 'testuser-common-api' + dateTime + '@test.com';
    password = '123456789';
});
describe('Product registration - api', () => {
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
            let token = response.body.authorization;
            expect(token).to.not.be.empty;
            cy.log('Token: ' + token);

            cy.request({
                method: 'POST',
                url: '/produtos',
                headers: {
                    accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: token,
                },
                body: {
                    nome: 'Logitech MX Vertical version_' + dateTime,
                    preco: 299,
                    descricao: 'Mouse',
                    quantidade: 999,
                },
            }).then((response) => {
                cy.log('Response Body:', response.body);
                expect(response.status).to.eq(201); // Adjust based on expected status code
                expect(response.body).to.have.property('message', 'Cadastro realizado com sucesso'); // Adjust based on API response
            });

        });
    })

})


