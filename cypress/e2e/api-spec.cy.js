describe('Testes relacionados a API', () => {

    it('Valida o retorno de Usuários', () => {

        cy.request({
            method: 'GET',
            url: 'https://serverest.dev/usuarios'
        }).then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body).to.have.property('quantidade')
            expect(response.body).to.have.property('usuarios')                
        })
    })

    it('Cadastra usuário via API', () => {
        const email = `cy${Math.floor(Math.random() * 100)}@target.com.br`
        cy.request({
            method: 'POST',
            url: 'https://serverest.dev/usuarios',
            body: {
                "nome": "Cypress Teste",
                "email": email,
                "password": "teste",
                "administrador": "true"
            }
        }).then((response) => {
            expect(response.status).to.equal(201)
            expect(response.body).to.have.property('message', 'Cadastro realizado com sucesso')
            expect(response.body).to.have.property('_id')
            const usuarioId = response.body._id;

            cy.request({
                method: 'GET',
                url: `https://serverest.dev/usuarios/${usuarioId}`
            }).then((getResponse) => {
                expect(getResponse.status).to.equal(200);
                expect(getResponse.body).to.have.property('_id', usuarioId);
                expect(getResponse.body).to.have.property('nome', 'Cypress Teste');
                expect(getResponse.body).to.have.property('email', email);
            });
        });
    })

    describe('Testes referentes a edição de usuario', () => {

        let usuarioId;
        let email;

        beforeEach(() => {
            email = `cy${Math.floor(Math.random() * 100)}@target.com.br`
            cy.request({
                method: 'POST',
                url: 'https://serverest.dev/usuarios',
                body: {
                    "nome": "Cypress Teste",
                    "email": email,
                    "password": "teste",
                    "administrador": "true"
                }
            }).then((response) => {
                expect(response.status).to.equal(201)                
                usuarioId = response.body._id;
            })
        })

        it('Edita o nome do usuário cadastrado', () => {

            cy.request({
                method: 'PUT',
                url: `https://serverest.dev/usuarios/${usuarioId}`,
                body: {
                    "nome": "Cypress Teste Editado",
                    "email": email,
                    "password": "teste",
                    "administrador": "true"
                }
            }).then((response) => {
                expect(response.status).to.equal(200)
                expect(response.body).to.have.property('message', 'Registro alterado com sucesso')

                cy.request({
                method: 'GET',
                url: `https://serverest.dev/usuarios/${usuarioId}`
                }).then((getResponse) => {
                        expect(getResponse.status).to.equal(200);                        
                        expect(getResponse.body).to.have.property('nome', 'Cypress Teste Editado');
                });
            })            
        })
    })
})