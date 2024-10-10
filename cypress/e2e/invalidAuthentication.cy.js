describe('User addition', () => {
    beforeEach("load fixture", function () {
        cy.fixture("token.json").as('token');
    });

    it('Add new valid user', () => {
        cy.get('@token').then((authToken) => {
            createValidUser('public/v2/users', authToken.accessToken, 201);
        });
        it()
    })
})